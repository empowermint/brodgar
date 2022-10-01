import { useTina } from 'tinacms/dist/edit-state'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../.tina/__generated__/client'

import Layout from '../components/Layout'

export default function Page(props) {
  const { data } = useTina({ // This function allows the CMS to alter page data in admin mode, and just passes the date through in production
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <Layout> { /* TODO: Configure SEO descriptions */ }
      <h1>{props.data.pages.title}</h1>
      <TinaMarkdown content={props.data.pages.body} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pagesConnection()

  return {
    paths: pagesListData.data.pagesConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  let data = {}, query = {}, variables = { relativePath: `${params.filename}.mdx` }
  try {
    const res = await client.queries.pages(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query
    },
  }
}

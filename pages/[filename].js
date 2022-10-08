import { useTina } from 'tinacms/dist/edit-state'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../.tina/__generated__/client'

import Layout from '../components/Layout'

export default function Page(props) {
  // const { data } = useTina({ TODO: Enable contextual editing
  //   // This function allows the CMS to alter page data in admin mode, and just passes the data through in production
  //   query: props.query,
  //   variables: props.variables,
  //   data: props.data
  // })

  const { title, body } = props.data.pages

  return (
    <Layout> { /* TODO: Configure SEO descriptions */ }
      <h1>{title}</h1>
      <TinaMarkdown content={body} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const pagesListData = await client.queries.pagesConnection()

  return {
    paths: pagesListData.data.pagesConnection.edges.map((page) => ({
      params: { filename: page.node._sys.filename },
    })),
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.pages({ relativePath: `${params.filename}.mdx` })

  return {
    props: {
      data, query, variables
    },
  }
}

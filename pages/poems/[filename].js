import { useTina } from 'tinacms/dist/edit-state'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../.tina/__generated__/client'

import Layout from '../../components/Layout'

export default function Poem(props) {
  // const { data } = useTina({ TODO: Enable contextual editing
  // // This function allows the CMS to alter page data in admin mode, and just passes the date through in production
  //   query: props.query,
  //   variables: props.variables,
  //   data: props.data,
  // })

  const { title, poem } = props.data.poems

  return (
    <Layout> { /* TODO: Configure SEO descriptions */ }
      <h1>{title}</h1>
      <TinaMarkdown content={poem} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const poemsListData = await client.queries.poemsConnection()

  return {
    paths: poemsListData.data.poemsConnection.edges.map((poem) => ({
      params: { filename: poem.node._sys.filename },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  let data = {}, query = {}, variables = { relativePath: `${params.filename}.json` }
  try {
    const res = await client.queries.poems(variables)
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

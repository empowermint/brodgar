import { useTina } from 'tinacms/dist/edit-state'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../../.tina/__generated__/client'

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.post.title}
          </h1>
          <ContentSection content={data.post.body}></ContentSection>
        </div>
        <div className="bg-green-100 text-center">
          Lost and looking for a place to start?
          <a
            href="https://tina.io/guides/tina-cloud/getting-started/overview/"
            className="text-blue-500 underline"
          >
            {' '}
            Check out this guide
          </a>{' '}
          to see how add TinaCMS to an existing Next.js site.
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.filename}.mdx` }
  try {
    const res = await client.queries.post(variables)
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
      query: query,
      //myOtherProp: 'some-other-data',
    },
  }
}

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection()

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  }
}

export default BlogPage

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  )
}

const components = {
  PageSection: PageSection,
}

const ContentSection = ({ content }) => {
  return (
    <TinaMarkdown components={components} content={content} />
  )
}

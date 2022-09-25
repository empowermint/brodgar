import Layout from '../components/Layout'
import getMarkdownContent from '../lib/getMarkdownContent.mjs';

export default function Home({ title, description, content }) {
  return (
    <Layout title={title} description={description}>
      <div dangerouslySetInnerHTML={{__html: (content)}}></div>
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await getMarkdownContent('home', './content/');

  return {
    props: {
      title: page.title,
      description: page.description,
      content: page.content
    }
  }
}

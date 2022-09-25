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
  const { yaml, content } = await getMarkdownContent('home', './content/');

  return {
    props: {
      title: yaml.title,
      description: yaml.description,
      content: content
    }
  }
}

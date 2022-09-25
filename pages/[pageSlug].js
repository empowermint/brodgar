import getPageSlugs from '../lib/getPageSlugs.mjs';
import getMarkdownContent from '../lib/getMarkdownContent.mjs';
import Layout from '../components/Layout';

export default function Page({ title, description, content }){
  return (
    <Layout title={title} description={description}>
      <h1>{title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{__html: (content)}}></div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getPageSlugs('./content/pages/');
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { yaml, content } = await getMarkdownContent(params.pageSlug, './content/pages/');

  return {
    props: {
      title: yaml.title,
      description: yaml.description,
      content: content
    }
  }
}

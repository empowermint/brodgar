import getPageSlugs from '../lib/getPageSlugs';
import getMarkdownContent from '../lib/getMarkdownContent';
import Layout from '../components/Layout';

export default function Page({title, description, content}){
  return (
    <Layout title={title} description={description}>
      <article>
        <h1>{title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{__html: (content)}}></div>
      </article>
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
  const page = await getMarkdownContent(params.pageSlug, './content/pages/');

  return {
    props: {
      title: page.title,
      description: page.description,
      content: page.content
    }
  }
}

import fs from 'fs';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export default async function getMarkdownContent(slug, dir) {
  const content = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter) // TODO: Get this data into the return object
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(fs.readFileSync(dir + slug + '.md', 'utf8'));
  
  return {
    title: 'Temporary Title',
    description: 'Temporary Description',
    content: String(content)
  }
}

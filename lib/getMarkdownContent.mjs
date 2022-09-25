import fs from 'fs';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import matter from 'gray-matter'

export default async function getMarkdownContent(slug, dir) {
  const fileContents = fs.readFileSync(dir + slug + '.md', 'utf8')
  const { data, content } = matter(fileContents)
  const html = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content)

  return {
    yaml: data,
    content: String(html)
  }
}

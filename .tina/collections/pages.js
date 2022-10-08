export const pages = {
  label: 'Pages',
  name: 'pages',
  path: '.tina/content/pages',
  format: 'mdx',
  // ui: { TODO: Enable contextual editing
  //   router: ({ document }) => {
  //     // https://tina.io/docs/tinacms-context/#accessing-contextual-editing-from-the-cms
  //     return `/${document._sys.filename}`
  //   },
  // },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true
    },
    {
      type: 'rich-text',
      label: 'Page Body',
      name: 'body',
      isBody: true,
    },
  ],
}

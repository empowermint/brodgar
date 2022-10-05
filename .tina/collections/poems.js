export const poems = {
  label: 'Poems',
  name: 'poems',
  path: '.tina/content/poems',
  format: 'json',
  ui: {
    router: ({ document }) => {
      // https://tina.io/docs/tinacms-context/#accessing-contextual-editing-from-the-cms
      return `/poems/${document._sys.filename}`
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image'
    },
    {
      type: 'rich-text',
      label: 'Poem Text',
      name: 'poem',
      isBody: true
    },
  ],
}

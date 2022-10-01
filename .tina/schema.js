import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client'

import { pages } from './collections/pages'
import { poems } from './collections/poems'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'
const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: '<Your Read Only Token>', // generated on app.tina.io,
    clientId: '<Your Client ID>', // generated on app.tina.io
    branch,
  },
  collections: [
    pages,
    poems
  ],
})

export default schema

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
})


import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { event } from '../sanity/schemas/events'
import { gallery } from '../sanity/schemas/gallery'
import { siteInfo } from '../sanity/schemas/siteInfo'

export default defineConfig({
  name: 'default',
  title: 'DeenDriven CMS',
  projectId: '1ajzdigg',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [event, gallery, siteInfo],
  },
})

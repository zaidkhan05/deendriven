// ---- /sanity/sanity.config.js ----
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { event } from './schemas/event';
import { gallery } from './schemas/gallery';
import { siteInfo } from './schemas/siteInfo';

export default defineConfig({
  name: 'default',
  title: 'DeenDriven CMS',
  projectId: '1ajzdigg',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [event, gallery, siteInfo]
  }
});

// ---- /sanity/schemas/siteInfo.js ----
export const siteInfo = {
  name: 'siteInfo',
  title: 'Site Info',
  type: 'document',
  fields: [
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image' }
  ]
};
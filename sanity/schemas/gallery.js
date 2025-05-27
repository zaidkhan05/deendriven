// ---- /sanity/schemas/gallery.js ----
export const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'tag', title: 'Tag', type: 'string' }
  ]
};
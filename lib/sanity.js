// ---- /lib/sanity.js ----
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: 'production',
  projectId: '1ajzdigg', // ✅ your actual project ID
  useCdn: true,
  apiVersion: '2023-01-01',
}

export const sanityClient = createClient(config)
export const urlFor = (source) => imageUrlBuilder(config).image(source)

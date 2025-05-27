// pages/gallery.js
import Layout from '../components/Layout'
import { sanityClient, urlFor } from '../lib/sanity'

export default function GalleryPage({ gallery }) {
  return (
    <Layout>
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div key={item._id} className="bg-gray-800 p-4 rounded-lg">
              {item.image && (
                <img
                  src={urlFor(item.image).width(600).url()}
                  alt={item.title}
                  className="rounded mb-2"
                />
              )}
              <h2 className="text-lg font-semibold">{item.title}</h2>
              {item.tag && <p className="text-sm text-gray-400">#{item.tag}</p>}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const query = `*[_type == "gallery"] | order(_createdAt desc)`
  const gallery = await sanityClient.fetch(query)

  return {
    props: { gallery },
    revalidate: 60,
  }
}

// pages/events.js
import Layout from '../components/Layout'
import { sanityClient, urlFor } from '../lib/sanity'

export default function EventsPage({ events }) {
  return (
    <Layout>
      <div className="bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(event => (
            <div key={event._id} className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-300 mb-2">{new Date(event.date).toLocaleString()}</p>
              <p className="text-sm mb-4">{event.location}</p>
              {event.image && (
                <img
                  src={urlFor(event.image).width(600).url()}
                  alt={event.title}
                  className="rounded-lg mb-2"
                />
              )}
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const query = `*[_type == "event"] | order(date desc)`
  const events = await sanityClient.fetch(query)

  return {
    props: { events },
    revalidate: 60,
  }
}

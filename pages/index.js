// pages/index.js

import Layout from '../components/Layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout>
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">United by Faith</h1>
          <div className="space-x-4">
            <Link href="/events"><button className="bg-white text-black px-6 py-2 rounded-full font-semibold">View Events</button></Link>
            <Link href="/contact"><button className="border border-white px-6 py-2 rounded-full font-semibold">Contact Us</button></Link>
          </div>
        </div>
      </section>
      <section className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Rides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-xl">Car 1</div>
          <div className="bg-gray-700 p-4 rounded-xl">Car 2</div>
          <div className="bg-gray-700 p-4 rounded-xl">Car 3</div>
        </div>
      </section>
    </Layout>
  );
}

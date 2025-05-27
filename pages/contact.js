// pages/gallery.js
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" rows="5" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">Send</button>
        </form>
      </div>
    </Layout>
  );
}

// components/Layout.js

import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-black text-white font-sans">
    <nav className="flex items-center justify-between p-4 bg-gray-900">
      <div className="text-xl font-bold">DeenDriven</div>
      <div className="hidden md:flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/merch">Merch</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>

    <main>{children}</main>

    <footer className="bg-gray-900 p-4 mt-12 text-center">
      <p className="text-sm">© {new Date().getFullYear()} DeenDriven. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;

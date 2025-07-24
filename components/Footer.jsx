import React from 'react';
// Importing icons from react-icons
// npm install react-icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-xl font-bold mb-2">WebDev2 INC</h2>
          <p className="text-sm text-gray-400">
            building the world of tommorow.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
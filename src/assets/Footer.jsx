import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold tracking-wide mb-1">TechVerse</h1>
          <p className="text-sm text-gray-200">Building the future with innovation 🚀</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-white text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-yellow-300 transform hover:scale-125 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-yellow-300 transform hover:scale-125 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
             className="hover:text-yellow-300 transform hover:scale-125 transition duration-300">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-300 text-center sm:text-right">
          © {new Date().getFullYear()} TechVerse. All rights reserved.
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="h-1 mt-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 animate-pulse rounded-full"></div>
    </footer>
  );
}

export default Footer;

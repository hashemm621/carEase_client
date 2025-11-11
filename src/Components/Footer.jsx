import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <footer className="bg-[#e81c2e] text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">TravelEase</h1>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
        </div>

        
        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0 text-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/all-vehicles" className="hover:underline">Vehicles</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
             <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

     
      <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white/80">
        TravelEase - Making your travels smooth and memorable.
      </div>
    </footer>
  );
};

export default Footer;

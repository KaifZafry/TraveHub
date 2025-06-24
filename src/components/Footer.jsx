import React from "react";
import logo from "/assets/images/logo-light.png"; 
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm">
            Your trusted travel partner for flights, hotels, holidays and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Air Ticket</a></li>
            <li><a href="#" className="hover:text-white">Visa Assistance</a></li>
            <li><a href="#" className="hover:text-white">Hajj Umrah Package</a></li>
            <li><a href="#" className="hover:text-white">Tour Package</a></li>
            <li><a href="#" className="hover:text-white">Group Tour</a></li>
            <li><a href="#" className="hover:text-white">Domestic Tour</a></li>
            <li><a href="#" className="hover:text-white">International Tour</a></li>
            <li><a href="#" className="hover:text-white">Hotel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to='/' className="hover:text-white">Home</Link></li>
            <li><Link to='/about' className="hover:text-white">About Us</Link></li>
            <li><Link to='/services' className="hover:text-white">Services</Link></li>
            <li><Link to='/contact' className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">
            📍 123 Travel Street, City, Country<br />
            📞 +91 12345 67890<br />
            📧 info@travelagency.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
      </div>
    </footer>
  );
}

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header  className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="/assets/images/logo.png" alt="Logo" className="w-36" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to='/' className="hover:text-blue-500">Home</Link>
          <Link to='/about' className="hover:text-blue-500">About</Link>
          <Link to='/services' className="hover:text-blue-500">Services</Link>
          <Link to='/destination' className="hover:text-blue-500">Destinations</Link>
          <Link to='/galery' className="hover:text-blue-500">Gallery</Link>
          <Link to='/contact'  className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Start Booking</Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-gray-700">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/services" className="hover:text-blue-500">Services</Link>
           
            <Link to="/destinations" className="hover:text-blue-500">Destination</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            <Link to="/signup" className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition">Start Booking</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

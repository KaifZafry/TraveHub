import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaClock, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-gray-900 hidden md:block py-4 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
        <ul className="flex flex-wrap gap-4 text-white">
          <li className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-primary" />
            <span>6391 Elgin St. Celina, Delaware</span>
          </li>
          <li className="flex items-center gap-1">
            <FaEnvelope className="text-primary" />
            <a href="mailto:exam126@gmail.com" className="hover:underline">exam126@gmail.com</a>
          </li>
          <li className="flex items-center gap-1">
            <FaClock className="text-primary" />
            <span>9:00am - 10:00pm</span>
          </li>
        </ul>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="https://facebook.com" className="text-white hover:text-blue-500"><FaFacebookF /></a>
          <a href="https://twitter.com" className="text-white over:text-blue-400"><FaTwitter /></a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-700"><FaLinkedinIn /></a>
          <a href="https://instagram.com" className=" text-white hover:text-pink-600"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

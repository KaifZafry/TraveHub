import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FlightList from '../pages/flightsResults';
import FlightBookingForm from '../pages/FlightBooking';
import HotelResults from '../pages/HotelResults';
import HotelBookingForm from '../pages/HotelBooking';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/Signup';
import Footer from '../components/Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';


export default function AppRoutes() {
  
  return (
    <>
    <Topbar/>
    <Header/>
    
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/flightlist" element={<FlightList />} />
     
      <Route path="/flight-booking/:id" element={<FlightBookingForm />} />
      <Route path="/hotels" element={<HotelResults />} />
      <Route path="/hotel-booking/:id" element={<HotelBookingForm />} />
    </Routes>
    <Footer/>
    </>
  );
}

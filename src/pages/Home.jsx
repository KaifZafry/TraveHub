// pages/HomePage.jsx
import React, { useState } from 'react';
import FlightBookingForm from './FlightBooking'
import HotelBookingForm from './HotelBooking'
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div>
      <div className="flex gap-4 justify-center mt-6">
        <button
          onClick={() => setActiveTab('flights')}
          className={`px-6 flex items-center gap-2 py-2 rounded-full ${activeTab === 'flights' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <FaPlaneDeparture />
          Flights
        </button>
        <button
          onClick={() => setActiveTab('hotels')}
          className={`px-6 flex items-center gap-2 py-2 rounded-full ${activeTab === 'hotels' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <FaHotel/>
          Hotels
        </button>
      </div>

      {activeTab === 'flights' ? <FlightBookingForm /> : <HotelBookingForm />}
    </div>
  );
};

export default HomePage;

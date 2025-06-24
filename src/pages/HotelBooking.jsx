// components/HotelBookingForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHotel, FaCalendarAlt } from 'react-icons/fa';

const HotelBookingForm = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/hotel-list', {
      state: { destination, checkIn, checkOut },
    });
  };

  return (
    <div className="bg-white max-w-6xl p-6 rounded-2xl shadow-xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">Destination</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaHotel />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">Check-in</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaCalendarAlt />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">Check-out</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaCalendarAlt />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-purple-700"
        >
          Search Hotels
        </button>
      </div>
    </div>
  );
};

export default HotelBookingForm;

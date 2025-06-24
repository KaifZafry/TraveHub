// components/FlightBookingForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaCalendarAlt } from 'react-icons/fa';

const FlightBookingForm = () => {
  const [from, setFrom] = useState('New York');
  const [to, setTo] = useState('London');
  const [journeyDate, setJourneyDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passenger, setPassenger] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');
  const [tripType, setTripType] = useState('oneway');

  const navigate = useNavigate();

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = () => {
    navigate('/flightlist', {
      state: { from, to, journeyDate, returnDate, passenger, travelClass, tripType },
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-6xl mx-auto mt-10">
      <div className="flex justify-between">
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input type="radio" value="oneway" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
            One Way
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="twoway" checked={tripType === 'twoway'} onChange={() => setTripType('twoway')} />
            Round Trip
          </label>
        </div>
        <select
          value={travelClass}
          onChange={(e) => setTravelClass(e.target.value)}
          className="bg-transparent mb-2 py-2 px-4  border border-b-blue-600 rounded-xl outline-none text-sm text-gray-500"
        >
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
      </div>

      <div className={`grid relative grid-cols-1 ${tripType === 'twoway' ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-4`}>
        <div className="relative bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">From</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaPlaneDeparture />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        

        <div className="relative bg-purple-50 p-4 rounded-xl">
          <div className="flex justify-center items-center md:absolute top-8 -left-8 z-20">
          <button onClick={handleSwap} className="bg-purple-200 hover:bg-purple-300 p-3 rounded-full">
            <FaExchangeAlt className="text-purple-700" />
          </button>
        </div>

          <label className="text-sm text-gray-600">To</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaPlaneArrival />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">Journey Date</label>
          <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
            <FaCalendarAlt />
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {tripType === 'twoway' && (
          <div className="bg-purple-50 p-4 rounded-xl">
            <label className="text-sm text-gray-600">Return Date</label>
            <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
              <FaCalendarAlt />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="bg-transparent w-[100%] outline-none "
              />
            </div>
          </div>
        )}

        <div className="bg-purple-50 p-4 rounded-xl">
          <label className="text-sm text-gray-600">Passengers</label>
          <input
            type="number"
            min="1"
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            className="bg-transparent w-[100%] outline-none text-xl font-semibold"
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-purple-700"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default FlightBookingForm;

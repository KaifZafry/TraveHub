// FlightBooking.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaCalendarAlt, FaUser, FaHotel } from 'react-icons/fa';

const FlighSearchForm = () => {
  const [from, setFrom] = useState('New York');
  const [to, setTo] = useState('London');
  const [journeyDate, setJourneyDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passenger, setPassenger] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');
  const [tripType, setTripType] = useState('oneway');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [activeTab, setActiveTab] = useState('flights');

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (activeTab === 'flights') {
      navigate('/flightlist', {
        state: { from, to, journeyDate, returnDate, passenger, travelClass, tripType },
      });
    } else {
      navigate('/hotel-list', {
        state: { destination, checkIn, checkOut },
      });
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-6xl min-w-6xl mx-auto mt-10">
      {/* Top Tabs */}
      <div className="flex gap-4 mb-6 text-lg font-semibold">
        <button
          onClick={() => setActiveTab('flights')}
          className={`px-6 py-2 rounded-full ${activeTab === 'flights' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          Flights
        </button>
        <button
          onClick={() => setActiveTab('hotels')}
          className={`px-6 py-2 rounded-full ${activeTab === 'hotels' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          Hotels
        </button>
      </div>

      {/* Flights Section */}
      {activeTab === 'flights' && (
        <>

        <div className='flex justify-between'>
<div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
              />
              One Way
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="twoway"
                checked={tripType === 'twoway'}
                onChange={() => setTripType('twoway')}
              />
              Round Trip
            </label>
          </div>
           <select
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                  className="bg-transparent p-3 border border-b-blue-600 rounded-2xl outline-none text-sm text-gray-500"
                >
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
        </div>
          

          <div className="grid relative grid-cols-1 md:grid-cols-5 gap-4">
            {/* From Input */}
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

            {/* Swap Button */}
            <div className="flex justify-center items-center md:absolute top-8 left-48 z-20  ">
              <button
                onClick={handleSwap}
                className="bg-purple-200 hover:bg-purple-300 p-3 rounded-full"
              >
                <FaExchangeAlt className="text-purple-700" />
              </button>
            </div>

            {/* To Input */}
            <div className="relative bg-purple-50 p-4 rounded-xl">
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

            {/* Journey Date */}
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

            {/* Return Date */}
            {tripType === 'twoway' && (
              <div className="bg-purple-50 p-4 rounded-xl">
                <label className="text-sm text-gray-600">Return Date</label>
                <div className="flex items-center gap-2 mt-2 text-xl font-semibold">
                  <FaCalendarAlt />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="bg-transparent outline-none w-full"
                  />
                </div>
              </div>
            )}

            {/* Passenger & Class */}
            <div className="bg-purple-50 p-4 rounded-xl">
              <label className="text-sm text-gray-600">Passengers, Class</label>
              <div className="flex flex-col mt-2">
                <input
                  type="number"
                  min="1"
                  value={passenger}
                  onChange={(e) => setPassenger(e.target.value)}
                  className="bg-transparent outline-none text-xl font-semibold mb-1"
                />
               
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hotels Section */}
      {activeTab === 'hotels' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Destination */}
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

          {/* Check-in */}
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

          {/* Check-out */}
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
      )}

      {/* Search Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-purple-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FlighSearchForm;

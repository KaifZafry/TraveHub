// components/FlightBookingForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const FlightBookingForm = () => {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Chennai");
  const [journeyDate, setJourneyDate] = useState("6/22/2025");
  const [returnDate, setReturnDate] = useState("");
  const [passenger, setPassenger] = useState(1);
  const [travelClass, setTravelClass] = useState("");
  const [tripType, setTripType] = useState("oneway");

  const navigate = useNavigate();

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = () => {
    navigate("/flightlist", {
      state: {
        from,
        to,
        journeyDate,
        returnDate,
        passenger,
        travelClass,
        tripType,
      },
    });
  };

  return (
    <>
      <div className="bg-white border border-black mb-8 p-6 rounded-2xl shadow-xl max-w-6xl mx-auto mt-10">
        <div className="flex justify-between">
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
              />
              One Way
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="twoway"
                checked={tripType === "twoway"}
                onChange={() => setTripType("twoway")}
              />
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

        <div
          className={`grid relative grid-cols-1  ${
            tripType === "twoway" ? "md:grid-cols-5" : "md:grid-cols-4"
          } gap-4`}
        >
          <div className="relative bg-blue-50 p-4 rounded-xl">
            <label className="text-sm text-gray-600">From</label>
            <div className="flex items-center gap-2 mt-2 text-md font-semibold">
              <FaPlaneDeparture />
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          <div className="relative bg-blue-50 p-4 rounded-md">
            <div className="flex justify-center items-center md:absolute top-8 -left-8 z-20">
              <button
                onClick={handleSwap}
                className="bg-blue-200 hover:bg-blue-300 p-3 rounded-full"
              >
                <FaExchangeAlt className="text-blue-700" />
              </button>
            </div>

            <label className="text-sm text-gray-600">To</label>
            <div className="flex items-center gap-2 mt-2 text-md font-semibold">
              <FaPlaneArrival />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl">
            <label className="text-sm text-gray-600">Journey Date</label>
            <div className="flex items-center gap-2 mt-2 text-md font-semibold">
              <FaCalendarAlt />
              <input
                type="date"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {tripType === "twoway" && (
            <div className="bg-blue-50 p-4 rounded-xl">
              <label className="text-sm text-gray-600">Return Date</label>
              <div className="flex items-center gap-2 mt-2 text-md font-semibold">
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

          <div className="bg-blue-50 p-4 rounded-xl">
            <label className="text-sm text-gray-600">Passengers</label>
            <input
              type="number"
              min="1"
              value={passenger}
              onChange={(e) => setPassenger(e.target.value)}
              className="bg-transparent w-[100%] outline-none text-md font-semibold"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-blue-700"
          >
            Search Flights
          </button>
        </div>
      </div>

      <div className="p-8 mx-auto">
        <div className="background-section rounded-2xl h-100 w-full bg-[url('/assets/images/summer-bg.webp')] bg-center bg-cover">
        
         <div className=" h-full ps-20 flex flex-col justify-center">
          <h2 className="text-white text-5xl mb-2 font-bold">Feel 20% more <br />relaxed</h2>
          <p className="text-sm text-white">Get together with the best hand picked <br /> deal from the world</p>
         </div>
        </div>
     
        
      </div>
    </>
  );
};

export default FlightBookingForm;

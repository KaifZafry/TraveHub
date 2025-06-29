import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlightCard from "../components/FlightCard";
import FlightFilters from "../components/FightFilters";
import FlightModal from "../components/FlightModal";
import SeatSelector from "../components/SeatSelector";
import FlightLoader from "../components/Flightloader";

export default function FlightList() {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { tripType, journeyDate,travelClass } = location.state || {};
  const formFilters = location.state || {};
  console.log(formFilters);

  const [flights, setFlights] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    airline: [],
    priceRange: "",
    travelClass: "",
    sort: "",
    departureTime: [],
  });

  const handleBook = (flight) => {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("/dummyFlights.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON file");
        return res.json();
      })
      .then((data) => {
        setFlights(data);
        console.log("Flights:", data); // ✅ use 'data' here, not 'flights'

        let temp = [...data];
        console.log("Form Filters:", formFilters);

        if (formFilters.from)
          temp = temp.filter(
            (f) => f.from.toLowerCase() === formFilters.from.toLowerCase()
          );

        if (formFilters.to)
          temp = temp.filter(
            (f) => f.to.toLowerCase() === formFilters.to.toLowerCase()
          );

        console.log("Filtered:", temp); // should show filtered result

        setFiltered(temp);

        setFilters((prev) => ({
          ...prev,
          from: formFilters.from || "",
          to: formFilters.to || "",
          travelClass: formFilters.travelClass || "",
        }));
      })
      .catch((err) => {
        console.error("Error fetching flights:", err);
      });
  }, []);

  useEffect(() => {
    if (flights.length === 0) return; // ✅ Wait until flights are loaded

    let data = [...flights];

    const matchesTime = (timeStr, ranges) => {
      const hour = new Date(timeStr).getHours();
      return ranges.some((range) => {
        if (range === "earlyMorning") return hour >= 0 && hour < 6;
        if (range === "morning") return hour >= 6 && hour < 12;
        if (range === "afternoon") return hour >= 12 && hour < 16;
        if (range === "evening") return hour >= 16 && hour < 20;
        if (range === "night") return hour >= 20 && hour < 24;
        if (range === "overnight") return hour >= 22 || hour < 6;
      });
    };

    if (filters.from)
      data = data.filter(
        (f) => f.from.toLowerCase() === filters.from.toLowerCase()
      );
    if (filters.to)
      data = data.filter(
        (f) => f.to.toLowerCase() === filters.to.toLowerCase()
      );
    if (filters.airline.length > 0)
      data = data.filter((f) => filters.airline.includes(f.airline));
    if (filters.travelClass)
      data = data.filter((f) => f.travelClass === filters.travelClass);
    if (filters.departureTime.length > 0)
      data = data.filter((f) =>
        matchesTime(f.departure, filters.departureTime)
      );

    if (filters.sort === "low") data.sort((a, b) => a.price - b.price);
    if (filters.sort === "high") data.sort((a, b) => b.price - a.price);

    setFiltered(data);
    console.log(filtered);
  }, [filters, flights]);

  const unique = (key) => [...new Set(flights.map((f) => f[key]))];

  const filterOptions = {
    from: unique("from"),
    to: unique("to"),
    airline: unique("airline"),
  };

  return (
    <>
      <div className="p-4 bg-[#041422]">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="p-2 text-center flex items-center text-white">
            <p className=" border mt-2 p-2 rounded border-amber-50">
              {tripType}
            </p>
          </div>
          <div className="mb-4 text-white">
            <label className="text-sm text-blue-500 font-medium block mb-1">From</label>
            <select
              value={filters.from}
              onChange={(e) => onChange({ ...filters, from: e.target.value })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select departure</option>
              {filterOptions.from.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* To */}
          <div className="mb-4 text-white">
            <label className="text-sm text-blue-500 font-medium block mb-1">To</label>
            <select
              value={filters.to}
              onChange={(e) => onChange({ ...filters, to: e.target.value })}
              className="w-full border p-2 rounded"
            >
              <option value="">Select destination</option>
              {filterOptions.to.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex mb-4  flex-col text-white">
            <p className="text-blue-500">Departure Date</p>
            <p className="border p-2 rounded">{journeyDate}</p>
          </div>
          <div className="flex mb-4  flex-col text-white">
            <p className="text-blue-500">Travel Class</p>
            <p className="border p-2 rounded">Economy</p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <FlightLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2 p-4">
          <FlightFilters
            filters={filters}
            onChange={setFilters}
            options={filterOptions}
          />

          <main className="md:col-span-3 grid gap-4">
            <div>
              {" "}
              {filtered.length > 0 ? (
                filtered.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    onBook={handleBook}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No flights found matching your filters.
                </p>
              )}
            </div>
          </main>

          <FlightModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            flight={selectedFlight}
          />

          {isModalOpen && selectedFlight && (
            <div className="mt-4 p-4 bg-white rounded shadow">
              <h3 className="text-lg font-semibold">Select Your Seats</h3>
              <SeatSelector
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
              <p className="mt-2 text-sm text-gray-600">
                Selected Seats: {selectedSeats.join(", ") || "None"}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

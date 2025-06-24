import React from "react";

export default function FlightFilters({ filters, onChange, options }) {
  const handleCheckboxChange = (field, value, checked) => {
    const updated = checked
      ? [...filters[field], value]
      : filters[field].filter((item) => item !== value);
    onChange({ ...filters, [field]: updated });
  };

  const timeRanges = [
    { label: "Early Morning (12 AM - 6 AM)", value: "earlyMorning" },
    { label: "Morning (6 AM - 12 PM)", value: "morning" },
    { label: "Afternoon (12 PM - 4 PM)", value: "afternoon" },
    { label: "Evening (4 PM - 8 PM)", value: "evening" },
    { label: "Night (8 PM - 12 AM)", value: "night" },
    { label: "Overnight", value: "overnight" },
  ];

  return (
    <aside className="bg-white p-4 rounded-xl shadow-lg h-fit">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* From */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">From</label>
        <select
          value={filters.from}
          onChange={(e) => onChange({ ...filters, from: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select departure</option>
          {options.from.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* To */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">To</label>
        <select
          value={filters.to}
          onChange={(e) => onChange({ ...filters, to: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Select destination</option>
          {options.to.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Airlines */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">Airlines</label>
        <div className="h-32 overflow-y-auto pr-1">
          {options.airline.map((air) => (
            <div key={air} className="flex items-center gap-2 my-1">
              <input
                type="checkbox"
                checked={filters.airline.includes(air)}
                onChange={(e) =>
                  handleCheckboxChange("airline", air, e.target.checked)
                }
              />
              <span>{air}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Class */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">Travel Class</label>
        <select
          value={filters.travelClass}
          onChange={(e) => onChange({ ...filters, travelClass: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </div>

      {/* Price Sort */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-1">Sort by Price</label>
        <select
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Departure Time */}
      <div className="mb-2">
        <label className="text-sm font-medium block mb-1">Departure Time</label>
        {timeRanges.map((range) => (
          <div key={range.value} className="flex items-center gap-2 my-1">
            <input
              type="checkbox"
              checked={filters.departureTime.includes(range.value)}
              onChange={(e) =>
                handleCheckboxChange("departureTime", range.value, e.target.checked)
              }
            />
            <span>{range.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

// components/SeatSelector.jsx
import { useState } from "react";

export default function SeatSelector({ totalSeats = 30, selectedSeats, setSelectedSeats }) {
  const toggleSeat = (seatNum) => {
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNum));
    } else {
      setSelectedSeats([...selectedSeats, seatNum]);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-2 mt-4">
      {Array.from({ length: totalSeats }, (_, i) => {
        const seatNum = i + 1;
        const isSelected = selectedSeats.includes(seatNum);
        return (
          <button
            key={seatNum}
            onClick={() => toggleSeat(seatNum)}
            className={`w-10 h-10 text-sm rounded ${
              isSelected ? "bg-blue-600 text-white" : "bg-gray-200"
            } hover:bg-blue-500`}
          >
            {seatNum}
          </button>
        );
      })}
    </div>
  );
}

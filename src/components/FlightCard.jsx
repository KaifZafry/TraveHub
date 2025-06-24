// components/FlightCard.jsx
export default function FlightCard({ flight, onBook }) {
  return (
    <div className="bg-white mb-4 max-h-24 rounded-xl shadow p-4 hover:shadow-xl transition-all">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div>
          <h3 className="text-lg font-bold">{flight.from} ➝ {flight.to}</h3>
          <p className="text-sm text-gray-500">{new Date(flight.departure).toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-600">Airline</p>
          <p className="font-semibold">{flight.airline}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-600">Arrival</p>
          <p className="font-semibold">{new Date(flight.arrival).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">${flight.price}</p>
          <button
            onClick={() => onBook(flight)}
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

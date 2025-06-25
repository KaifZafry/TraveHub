// components/FlightCard.jsx
export default function FlightCard({ flight, onBook }) {
  return (
    <div className="bg-white mb-4 max-h-24 rounded-xl shadow p-4 hover:shadow-xl transition-all">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="text-center flex items-center gap-4">
          <div className="flex flex-col items-center">
            <img className="w-10 mb-2 text-center" src={flight?.img} alt="" />
          <p className="font-semibold">{flight.airline}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>

            <h3 className="text-lg font-bold">{flight.from} </h3>
          </div>
          <div className="flex flex-col">
            <p className="text-center text-sm">2:55 hr</p>
            <div className="h-1 w-12 bg-green-400"></div>
          </div>

          <div className="text-center">
             <p className="text-sm text-gray-500">
              {new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>

            <h3 className="text-lg font-bold"> {flight.to} </h3>
          </div>


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

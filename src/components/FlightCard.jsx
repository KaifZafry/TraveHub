// components/FlightCard.jsx
export default function FlightCard({ flight, onBook }) {
  return (
    <div className="bg-white mb-4 max-h-24 rounded-xl shadow p-4 hover:shadow-xl transition-all">
  <div className="grid grid-cols-12 gap-4 items-center">
    {/* Left (Flight Logo + Airline Name) - Take less space */}
    <div className="col-span-2 flex items-center gap-2">
      <div className="flex flex-col items-center text-center">
        <img className="w-8 md:w-10 mb-1" src={flight?.img} alt="" />
        <p className="font-semibold text-sm">{flight.airline}</p>
      </div>
    </div>

    {/* Middle (Route Info + Duration) - Take more space */}
    <div className="col-span-7 flex items-center justify-evenly">
      <div className="text-center">
        <p className="text-sm text-gray-500">
          {new Date(flight.departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <h3 className="text-sm md:text-lg font-bold">{flight.from}</h3>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center text-sm">2:55 hr</p>
        <div className="h-1 w-12 bg-green-400 mt-1"></div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          {new Date(flight.arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <h3 className="text-sm md:text-lg font-bold">{flight.to}</h3>
      </div>
    </div>

    {/* Right (Price + Button) */}
    <div className="col-span-3 text-right">
      <div className="flex flex-col md:flex-row md:gap-2 justify-end items-center">
<p className="text-lg font-bold text-black">${flight.price}</p>
      <button
        onClick={() => onBook(flight)}
        className="mt-2 px-2 py-1 bg-blue-300 text-white rounded-full text-sm hover:bg-blue-600"
      >
        lock
      </button>
      </div>
      
    </div>
  </div>
</div>

  );
}

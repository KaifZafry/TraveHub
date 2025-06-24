// components/FlightModal.jsx
import { Dialog } from '@headlessui/react';
import { useEffect } from 'react';

export default function FlightModal({ open, onClose, flight }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [open]);

  if (!flight) return null;

  return (
    <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <Dialog.Panel className="bg-white p-6 rounded-xl z-50 w-[90%] max-w-xl">
        <Dialog.Title className="text-lg font-semibold mb-4">Flight Details</Dialog.Title>
        
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>From:</strong> {flight.from}</p>
          <p><strong>To:</strong> {flight.to}</p>
          <p><strong>Airline:</strong> {flight.airline}</p>
          <p><strong>Departure:</strong> {new Date(flight.departure).toLocaleString()}</p>
          <p><strong>Arrival:</strong> {new Date(flight.arrival).toLocaleString()}</p>
          <p><strong>Class:</strong> {flight.travelClass}</p>
          <p><strong>Price:</strong> ${flight.price}</p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Continue to Seat Selection
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}

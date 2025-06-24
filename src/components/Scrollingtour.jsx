import React from 'react';

const tours = [
  { name: "Dubai Tours", image: "/assets/images/Dubai Tours.jpg" },
  { name: "Singapore Tours", image: "/assets/images/Singapore 2.jpg" },
  { name: "Malaysia Tours", image: "/assets/images/Malaysia Tours.jpg" },
  { name: "Thailand Tours", image: "/assets/images/Thailand Tours.jpg" },
  { name: "Bhutan Tours", image: "/assets/images/Bhutan Tours.jpg" },
  { name: "Maldives Tours", image: "/assets/images/Maldives Tours.jpg" },
  { name: "Australia Tours", image: "/assets/images/Australia Tours.jpg" },
  { name: "Vietnam Tours", image: "/assets/images/Vietnam Tours.jpg" },
 
];

const ScrollingTours = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 bg-gray-100 relative">
        <h2 className='text-center text-3xl text-black font-bold mb-4'>Our Popular Tours</h2>
      <div className="animate-marquee flex w-max">
        {[...tours, ...tours].map((tour, index) => (
          <div
            key={index}
            className="w-48 flex-shrink-0 mx-4 text-center"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 text-md font-medium text-gray-800">{tour.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTours;

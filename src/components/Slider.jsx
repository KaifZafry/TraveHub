import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/images/bg-1.jpg",
  "/assets/images/makkah.jpg",
  "/assets/images/madina.jpg",
  "/assets/images/bg-2.jpg",
  "/assets/images/bg-3.jpg",
  "/assets/images/bg-4.jpg",
  "/assets/images/bg-1.jpg",
  "/assets/images/makkah.jpg",
  "/assets/images/madina.jpg",
  "/assets/images/bg-2.jpg",
  "/assets/images/bg-3.jpg",
  "/assets/images/bg-4.jpg",
 
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-center z-20">
        <div className="max-w-3xl p-4">
          <h2 className="text-white text-2xl mb-6">
           Welcome to Travhub
          </h2>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
            Adventure & Experience <br /> The Travel!
          </h1>
        
        </div>
      </div>
    </div>
  );
};

export default Slider;

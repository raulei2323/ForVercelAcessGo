import React from 'react';
import { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="min-w-full flex justify-center">
            {child}
          </div>
        ))}
      </div>
      <button
        className="absolute bg-[#2F4F4F] top-1/2 left-4 transform -translate-y-1/2
        e rounded-full p-2"
        onClick={prevSlide}
      >
       <span className="text-white text-xl">&lt;</span>
      </button>
      <button
        className="absolute bg-[#2F4F4F] top-1/2 right-4 transform -translate-y-1/2  rounded-full p-2"
        onClick={nextSlide}
      >
        <span className="text-white text-xl">&gt;</span>
      </button>
    </div>
  );
};

export default Carousel;

"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const properties = [
  {
    id: 1,
    title: "Luxury Residences",
    description:
      "Experience unparalleled elegance in our luxury residences, featuring exquisite design, premium amenities, and prime locations for the most discerning tastes.",
    image: "/services1.jpg.Avif",
  },
  {
    id: 2,
    title: "Eco Green Buildings",
    description:
      "Sustainable and innovative green building solutions for eco-conscious living and a greener future.",
    image: "/services2.Avif",
  },
  {
    id: 3,
    title: "Unique Vacation Homes",
    description:
      "Exclusive vacation homes with breathtaking views and premium comforts, perfect for relaxation.",
    image: "/services3.Avif"
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const current = properties[index];

  const nextSlide = () => {
    setIndex((prevIndex) => 
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) => 
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="services" className='mt-12 md:mt-35 mb-5 md:mb-10 px-4 sm:px-6 lg:px-8 '>
      <div className='flex flex-col md:ml-17 gap-3 mb-5 md:mb-15 max-w-4xl'>
        <p className='bg-gray-100 w-fit h-10 p-2 rounded-3xl text-sm md:text-base'>What We Offer</p>
        <h1 className='text-3xl md:text-[40px] font-semibold'>COMPREHENSIVE REAL ESTATE SOLUTIONS</h1>
        <p className='font-extralight text-base md:text-lg'>
          Our comprehensive services encompass luxury property sales, sustainable green building investments, and premium vacation rentals.
        </p>
      </div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-13">
        <div className="w-full md:w-1/3 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{current.title}</h2>
          <p className="text-black font-extralight text-base md:text-lg">{current.description}</p>
        </div>

        <div className="w-full md:w-2/3 relative order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl md:rounded-[30px] shadow-xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  width={1000}
                  height={600}
                  className="rounded-2xl md:rounded-[30px] object-cover w-full h-[300px] sm:h-[350px] md:h-[500px]"
                />
              </motion.div>
            </AnimatePresence>
            
    
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all duration-300"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-6 bg-white/90 text-black px-4 py-2 rounded-full font-medium text-sm md:text-base shadow-lg">
            {String(current.id).padStart(2, "0")} {current.title}
          </div>
        </div>

        <div className="hidden md:flex absolute top-1/2 flex-col items-start gap-6 text-gray-400">
          {properties.map((item, i) => (
            <div
              key={item.id}
              onMouseEnter={() => setIndex(i)} 
              className={`text-xs md:text-sm font-medium cursor-pointer transition-colors duration-300 ${
                index === i ? 'text-black font-bold' : 'opacity-70'
              }`}
            >
              {String(item.id).padStart(2, '0')} {item.title.toUpperCase()}
            </div>
          ))}
        </div>

      
        <div className="flex md:hidden w-full justify-center gap-4 mt-4 order-3">
          {properties.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === i ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>
    </div> 
  );
}
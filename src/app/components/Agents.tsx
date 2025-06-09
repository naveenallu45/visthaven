'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const experts = [
  {
    name: 'Michael Anderson',
    title: 'Vacation Rental Specialist',
    image: '/agent1.jpg',
  },
  {
    name: 'Charlotte Morgan',
    title: 'High-End Property Consultant',
    image: '/agent2.jpg',
  },
  {
    name: 'Sophia Rivera',
    title: 'Sustainable Housing Consultant',
    image: '/agent3.jpg',
  },
  {
    name: 'Liam Carter',
    title: 'Commercial Real Estate Expert',
    image: '/agent4.jpg',
  },
  {
    name: 'Michael Anderson',
    title: 'Vacation Rental Specialist',
    image: '/agent5.jpg',
  },
  {
    name: 'Charlotte Morgan',
    title: 'High-End Property Consultant',
    image: '/agent6.jpg',
  },
  {
    name: 'Sophia Rivera',
    title: 'Sustainable Housing Consultant',
    image: '/agent7.jpg',
  },
  {
    name: 'Liam Carter',
    title: 'Commercial Real Estate Expert',
    image: '/agent8.jpg',
  },
];

const Agents = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1;
    const delay = 20;

    const scroll = () => {
      if (!scrollContainer) return;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="agents" className="py-12 px-6">
      <div className=' flex flex-col items-center'>
      <h2 className="text-[17px] text-center mb-6 bg-gray-100 h-10 w-50 pt-2 rounded-3xl ">Meet Our Experts</h2>
      <h2 className="text-4xl font-bold text-center mb-6">PERSONALIZED GUIDANCE<br/> PROVEN EXPERTISE</h2>
      </div>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
       
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="inline-flex space-x-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="w-[350px] inline-block bg-white rounded-2xl  p-4 text-center"
            >
              <div className="rounded-2xl overflow-hidden w-full h-90 relative mb-4">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 250px"
                />
              </div>
              <div className='flex flex-col text-left'>
              <h3 className="font-semibold text-lg">{expert.name}</h3>
              <p className="text-gray-500 text-m">{expert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
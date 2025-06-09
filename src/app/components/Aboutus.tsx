'use client';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <section id="aboutus" className="bg-white px-6 md:px-20 py-16 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
       
        <div>
          <div className="mb-4">
            <button className="px-9 py-3 rounded-full bg-gray-100 text-[20px]  font-medium text-gray-700">
              Who We Are
            </button>
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            REDEFINING <br /> EXCELLENCE IN REAL ESTATE
          </h2>
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            We specialize in luxury properties, sustainable homes, and vacation rentals — driven by a
            passion for exceptional living and a commitment to quality, innovation, and client satisfaction.
          </p>

        
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl  font-light mb-1">200+</p>
              <p className="text-sm text-black">Projects Complete</p>
            </div>
            <div>
              <p className="text-3xl font-light mb-1">70+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-light mb-1">$10M+</p>
              <p className="text-sm text-gray-600">Project Value</p>
            </div>
            <div>
              <p className="text-3xl font-light mb-1">90%</p>
              <p className="text-sm text-gray-600">Client Retention Rate</p>
            </div>
          </div>
        </div>

       
        <div>
          <Image
            src="/About.avif" 
            alt="Team"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>

    
      <div className="grid md:grid-cols-2 gap-8 mt-16">
       
        <div className="bg-gray-100 rounded-2xl p-6">
          <img className='size-10 mb-4' src="/aboutvision.svg"/>
          <h3 className="text-[30px] font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            To be a leader in the real estate market, offering unparalleled services in luxury, sustainability,
            and vacation properties.
          </p>
        </div>

    
        <div className="bg-gray-100 rounded-2xl p-6">
          <img className='size-10 mb-4' src="/aboutmission.svg"/>
          <h3 className="text-[30px] font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            To create exceptional living experiences through innovation, sustainability, and personalized
            service in modern real estate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

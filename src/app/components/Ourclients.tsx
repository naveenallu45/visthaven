'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Nathan Harper',
    title: 'Software Developer',
    image: '/client.avif',
    text: "Buying my vacation home was surprisingly easy. Sophia really knew her stuff and made the whole process super smooth. I didn’t have to worry about a thing."
  },
  {
    name: 'Logan Price',
    title: 'Environmental Consultant',
    image: '/client2.avif',
    text: "Emily walked me through every step of my green home investment. She explained things clearly, gave great advice, and honestly just made it all feel doable."
  },
  {
    name: 'Aria Sullivan',
    title: 'Digital Nomad',
    image: '/client3.avif',
    text: "Isabella was amazing — super friendly and detail-oriented. I found the perfect rental without any of the usual stress. It actually felt fun."
  },
  {
    name: 'Grace Powell',
    title: 'Financial Consultant',
    image: '/client4.avif',
    text: "I had no idea where to start with property investment, but Emily made it all make sense. She was patient, clear, and completely on my side the whole time."
  }
];

const Ourclients = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-5 gap-10">
      <div className="md:col-span-2 flex flex-col gap-6">
        <button className="border border-gray-200 bg-gray-100 rounded-full px-5 py-1 w-fit text-sm">What Our Clients Say</button>
        <h2 className="text-4xl font-bold leading-snug">TRUSTED BY MANY,<br />LOVED BY ALL</h2>
        <p className="text-gray-600">Our clients’ success stories reflect our commitment to excellence. See how we’ve helped them find their dream homes, sustainable investments, and perfect getaways.</p>
      </div>
      <div className="md:col-span-3 grid md:grid-cols-2 gap-6 ">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-2xl p-6 flex flex-col gap-4 "
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm text-gray-800">{item.text}</p>
            <div className="flex items-center gap-3 pt-2">
              <Image
                src={item.image}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-xs text-gray-500">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourclients;

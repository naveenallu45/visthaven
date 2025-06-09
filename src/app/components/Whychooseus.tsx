import Image from "next/image";

const services = [
  {
    title: 'Property Sales',
    description: 'Expertly promoting and selling your property to attract qualified buyers.',
    image: "/why1.svg"
  },
  {
    title: 'Buyer Representation',
    description: 'Guiding you through the home-buying process, prioritizing your interests.',
    image: "/why2.svg"
  },
  {
    title: 'Rental Management',
    description: 'Managing tenant relations, maintenance, and finances to maximize rental returns.',
    image: '/why3.svg'
  },
  {
    title: 'Investment Consulting',
    description: 'Providing strategic advice to help you capitalize on real estate opportunities.',
    image: '/why4.svg'
  },
  {
    title: 'Property Valuation',
    description: "Accurately assessing your property's value for sales, purchases, or investments.",
    image: '/why5.svg'
  },
  {
    title: 'Tailored Solutions',
    description: 'Delivering customized real estate services aligned with your specific goals.',
    image: '/why6.svg'
  },
];

const Whychooseus = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-gray-100 text-sm px-4 py-1 rounded-full mb-4">
          Why Choose Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          EXPLORE OUR RANGE OF <br className="hidden sm:block" /> EXPERT REAL ESTATE SERVICES
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm mb-4">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={24} 
                height={24} 
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychooseus;
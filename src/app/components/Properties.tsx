import Image from "next/image";

const properties = [
  {
    location: 'Bel Air Hills, CA',
    locationIcon: "/location.jpg",
    name: 'Palazoo di Amore',
    image: "/proper1.avif",
    price: '$490,000'
  },
  {
    location: 'Bel Air, LA',
    locationIcon: "/location.jpg",
    name: 'The One',
    image: "/proper2.avif",
    price: '$690,000'
  },
  {
    location: 'Bel Air Hills, CA',
    locationIcon: "/location.jpg",
    name: 'Billionaire Mansion',
    image: "/proper3.avif",
    price: '$490,000'
  },
  {
    location: 'Bel Air owsal',
    locationIcon: "/location.jpg",
    name: 'The Manor',
    image: "/proper4.avif",
    price: '$590,000'
  },
  {
    location: 'Beverly Air Hills',
    locationIcon: "/location.jpg",
    name: 'The Beverly House',
    image: "/proper5.avif",
    price: '$890,000'
  },
  {
    location: 'Upper East Side, YK',
    locationIcon: "/location.jpg",
    name: 'The PentHouse Tower',
    image: "/proper6.avif",
    price: '$990,000'
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="inline-block bg-gray-100 text-sm px-4 py-1 rounded-full mb-4">
          Featured Properties
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          DISCOVER HOMES TAILORED TO YOUR <br className="hidden sm:block" /> LIFESTYLE AND NEEDS
        </h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div key={index} className="group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image 
                src={property.locationIcon} 
                alt="" 
                width={20} 
                height={20} 
              />
              <span className="text-gray-600">{property.location}</span>
            </div>
            <h3 className="text-xl font-bold mb-1">{property.name}</h3>
            <p className="text-lg font-semibold text-primary">{property.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
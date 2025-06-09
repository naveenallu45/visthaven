

const Home = () => {
  return (
    <div className="relative w-full max-w-[1240px] mx-auto mt-30 px-4 md:px-0">
      <img
        className="w-full h-[600px] md:h-[700px] object-cover rounded-[30px] brightness-80"
        src="./homehouse.jpg"
        alt="Home"
      />

      <div className="absolute top-10 md:top-1/7 left-4 md:left-20 right-4 pl-6 text-white w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          FIND YOUR<br /> PERFECT HOME<br /> TODAY
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-5 max-w-[500px]">
          We provide tailored real estate solutions, guiding you through every
          step with personalized experiences that meet your unique needs and
          aspirations.
        </p>
        <button className="bg-white text-black font-medium px-5 py-2 rounded-full hover:scale-105 transition">
          Explore Properties
        </button>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-8">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">200+</h1>
            <p className="text-sm sm:text-base">Projects Complete</p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">70+</h1>
            <p className="text-sm sm:text-base">Happy Clients</p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">$10M+</h1>
            <p className="text-sm sm:text-base">Project Value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import hero from "../../assets/imgs/hero-img.jpg";

const HomeHero = () => {
  return (
    <div className="min-h-screen mx-auto relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-75 z-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-full flex flex-col items-center text-white z-50 relative">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">
          We create amazing experiences with animations.
        </p>
        <div className="flex flex-col sm:flex-row gap-10">
          <button className="rounded-full bg-green-600 border-2 border-green-600 px-8 py-4 text-center text-white uppercase shadow-md shadow-gray-600 hover:bg-white hover:text-green-600 transition duration-300 cursor-pointer">
            request a free estimate
          </button>
          <button className="rounded-full bg-white border-2 border-green-600 px-8 py-4 text-center text-green-600 uppercase shadow-md shadow-gray-600 hover:bg-green-600 hover:border-white hover:text-white transition duration-300 cursor-pointer">
            about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

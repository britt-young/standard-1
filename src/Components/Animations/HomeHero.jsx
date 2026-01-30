import hero from "../../assets/imgs/hero-img.jpg";


const HomeHero = () => {
  return (
    <div className="min-h-screen mx-auto relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-100 z-0">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="h-full flex flex-col items-center text-white z-50 relative max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis beatae in similique? Veritatis deserunt sit voluptatum doloremque molestias repellat id distinctio
        </p>
        <div className="flex flex-col sm:flex-row gap-10">
          <button className="rounded-full bg-white border-2 border-white px-8 py-4 text-center text-black uppercase shadow-md shadow-gray-600 hover:bg-transparent hover:text-white transition duration-500 cursor-pointer">
            request a free estimate
          </button>
          <button className="rounded-full bg-transparent border-2 border-white px-8 py-4 text-center text-white uppercase shadow-md shadow-gray-600 hover:bg-white hover:border-white hover:text-black transition duration-500 cursor-pointer">
            about us
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

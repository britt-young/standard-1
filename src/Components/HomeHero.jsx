import hero from "../assets/imgs/hero-img.jpg";
import RippleProvider from "./Animations/RippleProvider";

const HomeHero = () => {
  return (
    <RippleProvider >
      <div className="mx-auto lg:min-h-screen md:h-140 h-150 relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full lg:h-full md:h-140 h-150 opacity-100 z-0">
          <img
            src={hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="h-fit flex flex-col items-center justify-center text-white z-40 relative max-w-4xl text-center px-5">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis beatae in similique? Veritatis deserunt sit voluptatum doloremque molestias repellat id distinctio
          </p>
          <div className="flex flex-col sm:flex-row lg:gap-10 md:gap-6 gap-4">
            <button
              data-ripple
              className="btn-primary"
            >
              request a free estimate
            </button>
            <button
              data-ripple
              className="btn-secondary"
            >
              about us
            </button>
          </div>
        </div>
      </div>
    </RippleProvider>
  );
};

export default HomeHero;

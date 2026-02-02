import hero from "../assets/imgs/hero-img.jpg";
import RippleProvider from "./Animations/RippleProvider";

const HomeHero = () => {
  return (
    <RippleProvider >
      <div className="min-h-screen mx-auto relative flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 z-0">
          <img
            src={hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="h-full flex flex-col items-center text-white z-40 relative max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis beatae in similique? Veritatis deserunt sit voluptatum doloremque molestias repellat id distinctio
          </p>
          <div className="flex flex-col sm:flex-row gap-10">
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

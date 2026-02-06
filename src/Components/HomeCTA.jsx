import { ArrowRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import cta from "../assets/imgs/cta-img.png";
import { SiLeaflet } from "react-icons/si";
import RippleProvider from "./Animations/RippleProvider";

const HomeCTA = () => {
  return (
    <RippleProvider>
      <div className="pattern-bg text-black px-5 min-h-150 flex items-center">
        <div data-aos="fade-right" data-aos-duration="800" className="bg-white w-full lg:max-w-7xl shadow-lg shadow-green-900/30 mx-auto flex flex-col lg:flex-row items-center lg:gap-10 gap-5 py-5 px-14 rounded-4xl">
          <div className="w-1/2 text-left">
            <h6 className="inline-flex"><SiLeaflet className="size-6 text-green-600 " />call us today</h6>
            <h2>Does Your Yard Need A Refresh?</h2>
            <p>
              Transform your outdoor space with our expert landscaping services.
            </p>
            <button
              data-ripple
              className="inline-flex rounded-full bg-green-900 border-2 border-green-900 hover:bg-white hover:text-black px-8 py-4 items-center text-white uppercase transition duration-500 gap-2 mt-10 cursor-pointer"
            >
              Get a free consult <ArrowRight />
            </button>
          </div>
          <div className="flex lg:flex-row flex-col  text-green-900 py-10 w-1/2 items-center gap-5">
            
            <div className="flex flex-col items-start w-full mt-5 gap-3">
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck /> Garden Beds
              </p>
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck /> Outdoor Living Spaces
              </p>
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck />
                Mowing & Edging
              </p>
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck /> Tree & Shrub Care
              </p>
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck />
                Irrigation & Drainage
              </p>
              <p className="inline-flex items-center gap-2 font-bold">
                <CircleCheck /> Paver Install & Repair
              </p>
            </div>
            <img src={cta} alt="Landscaping graphic" className="h-72" />
          </div>
        </div>
      </div>
    </RippleProvider>
  );
};

export default HomeCTA;

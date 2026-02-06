import { ArrowRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import cta from "../assets/imgs/cta-img.png";
import { SiLeaflet } from "react-icons/si";
import RippleProvider from "./Animations/RippleProvider";

const HomeCTA = () => {
  return (
    <RippleProvider>
      <div className="pattern-bg text-black p-5 min-h-150 flex items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="bg-white w-full lg:max-w-7xl shadow-lg shadow-green-900/30 mx-auto flex flex-col lg:flex-row items-center justify-around lg:gap-10 gap-5 py-10 lg:py-5 px-14 rounded-4xl"
        >
          <div className="lg:w-fit text-left">
            <h6 className="inline-flex">
              <SiLeaflet className="size-6 text-green-600 " />
              call us today
            </h6>
            <h2>Does Your Yard Need A Refresh?</h2>
            <p>
              Transform your outdoor space with our expert landscaping services.
            </p>
            <img
              src={cta}
              alt="Landscaping graphic"
              className="lg:hidden flex lg:h-72 pt-10"
            />
            <button
              data-ripple
              className="inline-flex rounded-full bg-green-900 border-2 border-green-900 hover:bg-white hover:text-black px-8 py-4 items-center text-white uppercase transition duration-500 gap-2 mt-0 lg:mt-10 cursor-pointer lg:w-fit w-full justify-center"
            >
              Get a free consult <ArrowRight />
            </button>
          </div>
          <div className="flex lg:flex-row flex-col text-green-900 lg:py-10 lg:w-fit items-start gap-5">
            <img
              src={cta}
              alt="Landscaping graphic"
              className="hidden lg:flex h-100 z-0"
            />
            <div className="lg:flex flex-col items-start w-full gap-3 hidden mt-6 z-10 -ml-20">
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
          </div>
        </div>
      </div>
    </RippleProvider>
  );
};

export default HomeCTA;

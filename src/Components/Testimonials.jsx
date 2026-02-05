import test from "../assets/imgs/6.png";

import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialCard from "./TestimonialCard";
AOS.init();

const Testimonials = () => {
  return (
    <div className="mx-auto min-h-150 relative flex items-center justify-center overflow-hidden">
      {/* background img with overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-100 z-0">
        <img
          src={test}
          alt="testimonial background photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="h-fit flex flex-col items-center justify-center text-black z-40 relative text-center px-5">
        <h2 className="text-white mb-10">What our customers are saying</h2>
        {/* testimonials cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

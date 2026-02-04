import test from "../assets/imgs/6.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testimonials = () => {
  return (
    <div className="mx-auto lg:min-h-150  h-full relative flex items-center justify-center overflow-hidden">
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
          className="flex flex-row px-5 lg:px-15 gap-2 lg:gap-10 pt-5"
        >
          {/* card */}
          <div className="bg-gray-50 shadow-lg rounded-lg lg:w-1/2 lg:mb-0 mb-6 p-4 ">
            <div className="h-full text-center">
              <img
                alt="avatar"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://images.unsplash.com/photo-1550691389-8d62871a20e8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-full bg-gray-100 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          {/* card */}
          <div className="bg-gray-50 shadow-lg rounded-lg lg:w-1/2 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="avatar"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://plus.unsplash.com/premium_photo-1675368982196-277a07fa3b0f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p className="text-gray-500">UI Develeoper</p>
            </div>
          </div>
          {/* <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p className="text-gray-500">CTO</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

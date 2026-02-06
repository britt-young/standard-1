import { useState } from "react";
import { SiLeaflet } from "react-icons/si";
import us from "../assets/imgs/5.png";
import ex1 from "../assets/imgs/1.png";
import ex2 from "../assets/imgs/2.png";
import ex3 from "../assets/imgs/3.png";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { TbGrowth } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { GoTriangleRight } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const steps = [
  {
    id: 1,
    icon: SiLeaflet,
    info: "2020",
    title: "Western Landscaping Was Founded",
    img: us,
    content:
      "We are committed to providing top-notch services that exceed our clients' expectations.From the initial consultation to the final walkthrough, we prioritize clear communication, attention to detail, and customer satisfaction. Choose us for your next project and experience the difference that dedication and expertise can make.",
    fact1: "this",
    fact2: "right",
    fact3: "here",
    bullet: GoTriangleRight  ,
  },
  {
    id: 2,
    icon: SiLeaflet,
    info: "2022",
    title: "Our Second Location Opens",
    img: ex2,
    content:
      "Our services are designed to meet the unique needs of each client. We offer a comprehensive range of solutions, from initial design and planning to construction and finishing touches. Our team collaborates closely with clients to understand their vision and bring it to life, ensuring that every detail is executed flawlessly. With a focus on quality materials, skilled craftsmanship, and innovative techniques, we deliver results that not only meet but exceed expectations.",
    fact1: "this",
    fact2: "right",
    fact3: "here",
    bullet: ImLocation    ,
  },
  {
    id: 3,
    icon: SiLeaflet,
    info: "2023",
    title: "Continued Growth and Excellence",
    img: ex3,
    content:
      "At the heart of our business is a commitment to excellence and customer satisfaction.  Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring that we deliver high-quality results on time and within budget. From start to finish, we prioritize clear communication, attention to detail, and a collaborative approach to ensure that our clients are thrilled with the final outcome.",
    fact1: "this",
    fact2: "right",
    fact3: "here",
    bullet: TbGrowth  ,
  },
  {
    id: 4,
    icon: SiLeaflet,
    info: "2026",
    title: "Still Serving Communities Today",
    img: ex1,
    content:
      "We pride ourselves on our ability to deliver exceptional results that exceed our clients' expectations. We work closely with our clients to understand their vision and bring it to life, ensuring that every detail is executed flawlessly. With a focus on quality craftsmanship, attention to detail, and customer satisfaction, we strive to create lasting relationships with our clients based on trust and excellence.",
    fact1: "100+ yard rennovations",
    fact2: "100% pesticide free",
    fact3: "here",
    bullet: AiTwotoneCheckCircle  ,
  },
];

const HomeAbout = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((step) => step.id === activeStep);
  const Bullet = currentStep.bullet;

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="800"
      className="container px-5 py-14 mx-auto bg-white/60 shadow-gray-300 shadow-lg mb-20"
    >
      {/* STEPPER */}
      <div className="flex mx-auto flex-row mb-10 w-full justify-between max-w-7xl">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`sm:px-6 py-3 w-1/2 sm:w-auto border-b-2 font-medium inline-flex items-center transition-all cursor-pointer
                ${
                  isActive
                    ? "border-green-600 text-green-900"
                    : "border-transparent text-gray-400 hover:text-gray-900"
                }`}
            >
              <Icon
                className={`w-5 h-5 mr-3 transition-transform duration-300
                  ${isActive ? "scale-125 animate-bounce" : "scale-100"}`}
              />
              <span className="font-bold">{step.info}</span>
            </button>
          );
        })}
      </div>

      {/* TEXT + IMAGE */}
      <div className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto gap-10 lg:gap-14">
        {/* TEXT */}
        <div className="md:w-1/2">
          <h2 className={`mb-4 text-gray-900 ${activeStep}`}>
            {currentStep.title}
          </h2>

          <p className={`text-base mb-4 ${activeStep}`}>
            {currentStep.content}
          </p>

          <div className="flex flex-col gap-2 ml-4 text-green-900">
            <p className={`inline-flex items-center gap-2 ${activeStep}`}>
              <Bullet className="h-6 w-6" />
              {currentStep.fact1}
            </p>
            <p className={`inline-flex items-center gap-2 ${activeStep}`}>
              <Bullet className="h-6 w-6" />
              {currentStep.fact2}
            </p>
            <p className={`inline-flex items-center gap-2 ${activeStep}`}>
              <Bullet className="h-6 w-6" />
              {currentStep.fact3}
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <img
          className={`md:w-1/2 w-full object-cover object-center shadow-2xl ${activeStep}`}
          alt={currentStep.info}
          src={currentStep.img}
        />
      </div>
    </div>
  );
};

export default HomeAbout;

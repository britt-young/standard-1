import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SiH3, SiLeaflet } from "react-icons/si";
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
      "The landscaping business began with a single mower, a pickup truck, and a strong work ethic. Founded to help neighbors maintain and improve their outdoor spaces, the company focused on reliability, fair pricing, and quality results. Early mornings, long days, and word-of-mouth referrals supported steady growth. Each project, from basic lawn care to complete landscape transformations, strengthened community trust. As demand increased, the business expanded its services, equipment, and staff while staying true to its original mission. Today, it continues to create healthy, attractive landscapes that bring pride, comfort, and long-term value to every property it serves.",
    fact1: "Co-Founder: John Hamm",
    fact2: "Co-Founder: Rya Hamm",
    bullet: GoTriangleRight,
  },
  {
    id: 2,
    icon: SiLeaflet,
    info: "2022",
    title: "Our Second Location Opens",
    img: ex2,
    content:
      "Opening a second location marked an exciting milestone for the landscaping business. Increased demand and a growing reputation made expansion a natural next step. After careful planning, hiring, and investing in new equipment, the second location opened to better serve surrounding areas. This expansion reduced travel time, improved response speed, and allowed the team to take on larger and more diverse projects. While growth brought new challenges, the same standards of quality, reliability, and customer care guided the transition. The second location strengthened the company’s presence and confirmed that the original vision could succeed on a larger scale.",
    fact1: "123 S Main Street, Tallahassee, FL",
    fact2: "456 N Main Street, Tallahassee, FL",
    bullet: ImLocation,
  },
  {
    id: 3,
    icon: SiLeaflet,
    info: "2023",
    title: "Continued Growth and Excellence",
    img: ex3,
    content:
      "Over the years, the landscaping business steadily grew through dedication, consistency, and adaptability. Services expanded beyond basic lawn care to include landscape design, hardscaping, seasonal maintenance, and commercial projects. Investing in skilled employees, modern equipment, and ongoing training helped maintain high standards as workloads increased. Customer feedback and industry trends shaped smarter decisions and long-term planning. Despite growth, the company never lost sight of its roots—hard work and honest service. Each year brought new opportunities, stronger partnerships, and continued improvement, allowing the business to evolve while staying true to the values that built its success.",
    fact1: "180+ residential homes serviced",
    fact2: "100+ commercial businesses serviced",
    bullet: TbGrowth,
  },
  {
    id: 4,
    icon: SiLeaflet,
    info: "2026",
    title: "Still Serving Communities Today",
    img: ex1,
    content:
      "Serving the community has always been a core value of the landscaping business. Beyond maintaining properties, the company believes in making a positive local impact. This includes supporting community events, donating services to schools and nonprofits, and helping elderly or disabled residents with yard care. Employees are encouraged to volunteer and take pride in contributing to the neighborhoods they work in daily. Giving back strengthens relationships and reflects gratitude for the community’s support over the years. By investing time, resources, and care, the business aims to grow not just financially, but as a trusted and responsible community partner.",
    fact1: "Area of service expanded to Thomasville, GA",
    fact2: "3rd year sponsoring Earth Day Tallahassee",
    bullet: AiTwotoneCheckCircle,
  },
];

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const HomeAbout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentStep = steps.find((step) => step.id === activeStep);
  const Bullet = currentStep.bullet;

  const handleStepChange = (id) => {
    if (id === activeStep || isTransitioning) return;
    setIsTransitioning(true);
    setActiveStep(id);
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="800"
      className="container px-5 py-14 mx-auto bg-white/60 shadow-lg mb-20"
    >
      {/* STEPPER */}
      <div className="flex mx-auto mb-10 w-full justify-between max-w-7xl">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => handleStepChange(step.id)}
              disabled={isTransitioning}
              className={`sm:px-6 py-3 border-b-2 inline-flex items-center transition-all cursor-pointer
                ${
                  isActive
                    ? "border-green-600 text-green-900"
                    : "border-transparent text-gray-400 hover:text-gray-900"
                }
                ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              <Icon
                className={`w-5 h-5 mr-3 transition-transform duration-300
                  ${isActive ? "scale-125 animate-bounce" : ""}`}
              />
              <span className="font-bold">{step.info}</span>
            </button>
          );
        })}
      </div>

      {/* SYNCED CONTENT */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setIsTransitioning(false)}
      >
        <motion.div
          key={activeStep}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto gap-10"
        >
          {/* TEXT */}
          <div className="md:w-1/2">
            <h3 className="mb-4 text-gray-900">{currentStep.title}</h3>

            <p className="mb-4">{currentStep.content}</p>

            <div className="flex flex-col gap-2 ml-4 text-green-900">
              <p className="inline-flex gap-2">
                <Bullet className="h-6 w-6" />
                {currentStep.fact1}
              </p>
              <p className="inline-flex gap-2">
                <Bullet className="h-6 w-6" />
                {currentStep.fact2}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <motion.img
            src={currentStep.img}
            alt={currentStep.info}
            className="md:w-1/2 w-full object-cover shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeAbout;

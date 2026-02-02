import { useState } from "react";
import { TreeDeciduous } from "lucide-react";
import us from "../assets/imgs/5.png";
import ex1 from "../assets/imgs/1.png";
import ex2 from "../assets/imgs/2.png";
import ex3 from "../assets/imgs/3.png";

const steps = [
  { id: 1, icon: TreeDeciduous, info: "STEP 1", img: us , content: "We are committed to providing top-notch services that exceed our clients' expectations.From the initial consultation to the final walkthrough, we prioritize clear communication, attention to detail, and customer satisfaction. Choose us for your next project and experience the difference that dedication and expertise can make."},
  { id: 2, icon: TreeDeciduous, info: "STEP 2", img: ex2, content: "Our services are designed to meet the unique needs of each client. We offer a comprehensive range of solutions, from initial design and planning to construction and finishing touches. Our team collaborates closely with clients to understand their vision and bring it to life, ensuring that every detail is executed flawlessly. With a focus on quality materials, skilled craftsmanship, and innovative techniques, we deliver results that not only meet but exceed expectations."},
  { id: 3, icon: TreeDeciduous, info: "STEP 3", img: ex3, content: "At the heart of our business is a commitment to excellence and customer satisfaction.  Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring that we deliver high-quality results on time and within budget. From start to finish, we prioritize clear communication, attention to detail, and a collaborative approach to ensure that our clients are thrilled with the final outcome."},
  { id: 4, icon: TreeDeciduous, info: "STEP 4", img: ex1, content: "We pride ourselves on our ability to deliver exceptional results that exceed our clients' expectations. We work closely with our clients to understand their vision and bring it to life, ensuring that every detail is executed flawlessly. With a focus on quality craftsmanship, attention to detail, and customer satisfaction, we strive to create lasting relationships with our clients based on trust and excellence."},
];

const HomeAbout = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep = steps.find((step) => step.id === activeStep);

  return (
    <div className="container px-5 pt-16 pb-6 max-w-7xl mx-auto flex flex-wrap flex-col bg-white/60 shadow-gray-300 shadow-lg mb-20">
      {/* STEPPER */}
      <div className="flex mx-auto flex-row gap-4 mb-10 flex-wrap">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`sm:px-6 py-3 w-1/2 sm:w-auto border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider transition-all hover:cursor-pointer
                  ${
                    isActive
                      ? "border-green-900 text-green-900"
                      : "border-transparent text-gray-400 hover:text-gray-900"
                  }`}
            >
              <Icon
                className={`w-5 h-5 mr-3 stroke-current transition-transform duration-300
                    ${isActive ? "scale-125 animate-bounce" : "scale-100"}`}
              />
              <span className="font-bold">{step.info}</span>
            </button>
          );
        })}
      </div>

      {/* TITLE / SUBTITLE + IMAGE with swipe effect */}
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto space-y-5">
        <h2 className={`mb-4 text-gray-900 ${activeStep}`}>Why Choose Us?</h2>
        <p className={`text-base ${activeStep}`}>{currentStep.content}</p>
        <img
          className={`lg:w-full block mx-auto object-cover object-center ${activeStep}`}
          alt={currentStep.info}
          src={currentStep.img}
        />
      </div>
    </div>
  );
};

export default HomeAbout;

import grass from "../assets/grass-silhouette.svg";
import { Fence, Building, Leaf } from "lucide-react";

const cards = [
  {
    title: "Residential Landscaping",
    icon: <Fence size={24} strokeWidth={1.5} />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, me?",
  },
  {
    title: "Commercial Landscaping",
    icon: <Building size={24} strokeWidth={1.5} />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ad?",
  },
  {
    title: "State Parks & Gardens",
    icon: <Leaf size={24} strokeWidth={1.5} />,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, so?",
  },
];

const HomeServices = () => {
  return (
    <section
      className="relative
    z-20 pb-24"
    >
      {/* Cards */}
      <div className="container mx-auto px-5 lg:px-0 lg:-mt-64 md:-mt-48 -mt-28 relative z-10">
        {/* Grass cap */}
        <div className="relative w-full overflow-hidden -mb-2">
          <img
            src={grass}
            alt="grass silhouette"
            className="
            w-full
            object-cover
            object-[center_top]
            h-20
            md:h-24
            lg:h-36
            transition-all
            duration-500
          "
          />
        </div>
        <div className="flex flex-wrap overflow-hidden shadow-lg">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full md:w-1/3 transition-all
                  duration-500
                  hover:scale-105"
            >
              <div
                className={`
                  h-full
                  flex
                  flex-col
                  bg-white
                  p-8
                  hover:bg-gray-100
                `}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-green-900 text-white shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    {card.title}
                  </h2>
                </div>

                <div className="grow">
                  <p className="leading-relaxed text-base">{card.content}</p>

                  <a className="mt-3 text-green-900 inline-flex items-center cursor-pointer">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

import grass from "../assets/grass-silhouette.svg";

const cards = [
  {
    title: "Shooting Stars",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "The Catalyzer",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </>
    ),
  },
  {
    title: "Neptune",
    icon: (
      <>
        <circle cx={6} cy={6} r={3} />
        <circle cx={6} cy={18} r={3} />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </>
    ),
  },
];

const HomeAbout = () => {
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
          {cards.map((card, i) => (
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
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-900 text-white shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    {card.title}
                  </h2>
                </div>

                <div className="grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>

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

export default HomeAbout;

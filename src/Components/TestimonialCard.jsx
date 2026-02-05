import { useState } from "react";
import review from "../data/clientReviews";

const TestimonialCard = () => {
  const [activeReview, setActiveReview] = useState(review[0]);

  return (
    <div className="relative w-full flex justify-center px-4">
      {/* Bubble */}
      <div
        className="
        relative
        bg-white
        rounded-3xl
        shadow-xl
        lg:h-52
        lg:w-5xl
        md:h-64
        md:w-3xl
        h-72
        w-80
        flex flex-col
        items-center
        justify-between
        px-5 pt-10 pb-16
      "
      >
        {/* Tail */}
        <div
          className="
          absolute
          -bottom-10
          left-2/3
          lg:left-3/4
          -translate-x-1/2
          w-0 h-0
          border-l-40 border-r-40 border-t-40 
          border-l-transparent border-r-transparent border-t-white
        "
        />

        {/* Review Text */}
        <h5 className="text-center italic text-base sm:text-lg md:text-xl mb-6 wrap-break-word">
          "{activeReview.text}"
        </h5>

        {/* Avatars */}
        <div className="flex justify-center -space-x-2">
          {review.map((item) => (
            <img
              key={item.id}
              src={item.avatar}
              alt={item.name}
              onClick={() => setActiveReview(item)}
              className={`
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                object-cover object-center rounded-full border-2 cursor-pointer
                transition-transform duration-300 ease-in-out
                hover:-translate-y-2 hover:scale-110
                ${activeReview.id === item.id ? "border-black" : "border-gray-200"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

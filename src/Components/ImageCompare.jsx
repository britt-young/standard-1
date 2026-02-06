import { useRef, useState } from "react";
import { BsArrowsExpandVertical  } from "react-icons/bs";
import park from "../assets/imgs/b-a-park.jpg";
import res from "../assets/imgs/b-a-res.jpg";
import comm from "../assets/imgs/b-a-comm.jpg";

const ImageCompare = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX) => {
    const bounds = containerRef.current.getBoundingClientRect();

    let x = clientX - bounds.left;
    let percentage = (x / bounds.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    setPosition(percentage);
  };

  const startDrag = () => {
    const stopDrag = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };

    const onMouseMove = (e) => {
      handleMove(e.clientX);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
  };

  const startTouch = () => {
    const stopTouch = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopTouch);
    };

    const onTouchMove = (e) => {
      handleMove(e.touches[0].clientX);
    };
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopTouch);
  };
  return (
    <div
      ref={containerRef}
      onClick={(e) => handleMove(e.clientX)}
      className="relative w-full max-w-6xl h-100 rounded-xl shadow-2xl overflow-hidden select-none"
      
    >
      <img
        src={park}
        alt="after-image"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        
      />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden w-full"
        style={{ width: `${position}%` }}
      >
        <img
          src={res}
          alt="before-image"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
            maxWidth: "none",
          }}
        />
      </div>
      {/* divider slide */}
      <div
        onMouseDown={startDrag}
        onTouchStart={startTouch}
        className="absolute top-0 h-full w-1 bg-black/50 shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 bg-black rounded-full p-1 -translate-x-1/2 -translate-y-1/2 cursor-grab">
          <BsArrowsExpandVertical size={24} className="text-white" />
        </div>
      </div>
      {/* overlay text */}
      <div className="absolute top-4 left-4 bg-black/10 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-lg">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/10 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-lg">
        After
      </div>
    </div>
  );
};

export default ImageCompare;

import { useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

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
        src="https://images.unsplash.com/photo-1765206685652-da5e0873327e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Grayscale"
        className="absolute inset-0 w-full h-full object-cover filter grayscale pointer-events-none"
      />

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src="https://images.unsplash.com/photo-1765206685652-da5e0873327e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Color"
          className="w-full h-full object-cover pointer-events-none"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
            maxWidth: "none",
          }}
        />
      </div>
      <div
        onMouseDown={startDrag}
        onTouchStart={startTouch}
        className="absolute top-0 h-full w-1 bg-white/50 shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 bg-white/70 rounded-full p-1 -translate-x-1/2 -translate-y-1/2 cursor-grab">
          <ArrowLeftRight color="white" />
        </div>
      </div>
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
        After
      </div>
    </div>
  );
};

export default ImageCompare;

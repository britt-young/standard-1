

const Tooltip = ({ children, content, position = "top" }) => {
  // position can be "top", "bottom", "left", "right"
  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  };

  return (
    <div className="relative group inline-block">
      {children}

      <div
        className={`
          absolute ${positionClasses[position]}
          opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300
          bg-black text-white text-xs sm:text-sm px-2 py-1 rounded
          whitespace-nowrap pointer-events-none z-10
        `}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
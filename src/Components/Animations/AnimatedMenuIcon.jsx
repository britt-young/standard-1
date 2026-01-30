export default function AnimatedMenuIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      {/* Top line */}
      <path
        d="M4 6h16"
        className={`svg-center transition-transform duration-300 ${
          open && "rotate-45 translate-y-1.5"
        }`}
      />

      {/* Middle line */}
      <path
        d="M4 12h16"
        className={`transition-opacity duration-200 ${
          open && "opacity-0"
        }`}
      />

      {/* Bottom line */}
      <path
        d="M4 18h16"
        className={`svg-center transition-transform duration-300 ${
          open && "-rotate-45 -translate-y-1.5"
        }`}
      />
    </svg>
  );
}

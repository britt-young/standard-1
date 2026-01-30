import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedMenuIcon from "./Animations/AnimatedMenuIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Page 2", path: "/page-2" },
    { name: "Page 3", path: "/page-3" },
    { name: "Page 4", path: "/page-4" },
    { name: "Page 5", path: "/page-5" },
  ];

  return (
    <header className="relative z-50">
      {/* Utility bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 h-10 flex items-center justify-between">
          <span>📞 +1 (234) 567-890</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white transition-shadow text-black ${
          isSticky && "fixed top-0 left-0 right-0 shadow-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold">
            MyLogo
          </NavLink>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className="nav-link">
                {link.name}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <AnimatedMenuIcon open={open} />
          </button>
        </div>

        {/* Mobile menu (below navbar) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="px-4 py-4 flex flex-col gap-4 border-t border-gray-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/signup"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-white font-medium"
            >
              Get Started
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

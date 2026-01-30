import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedMenuIcon from "./Animations/AnimatedMenuIcon";
import logo from "../assets/imgs/nav-logo.jpg";
import { MdPhoneAndroid, MdEmail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

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

// Email obfuscation
  const emailUser = "western";
  const emailDomain = "email.com";

  // // Address for Apple Maps
  // const address = "Tallahassee, FL., USA";
  // const mapsLink = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  // Phone number
  const phoneNumber = "+18501234567";

  // Function to render email dynamically
  const renderEmail = () => {
    const email = `${emailUser}@${emailDomain}`;
    return (
      <span
        className="hover:underline cursor-pointer"
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        {emailUser}@{emailDomain}
      </span>
    );
  };

  return (
    <header className="relative z-50">
      {/* Utility bar */}
      <div className="bg-white text-black text-sm">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-end gap-6">
          {/* Phone */}
        <p>
          <MdPhoneAndroid className="inline-block w-4 me-2" />
          <a href={`tel:${phoneNumber}`} className="hover:underline">
            (850) 123-4567
          </a>
        </p>
          <span className="gap-2 flex items-center">
            <AiFillClockCircle />
            Mon - Fri: 9:00 AM - 6:00 PM
          </span>
          {/* Email */}
        <p>
          <MdEmail className="inline-block w-4 me-2 " />
          {renderEmail()}
        </p>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-gray-100 transition-shadow text-black h-32 ${
          isSticky && "fixed top-0 left-0 right-0 shadow-md"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-between">
          <NavLink to="/" className="h-full flex items-start">
            <img src={logo} alt="Logo" className="h-30" />
          </NavLink>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className="nav-link">
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/page-5"
              onClick={() => setOpen(false)}
              className="hidden md:flex mt-2 rounded-full bg-green-600 px-8 py-4 text-center text-white uppercase"
            >
              get a quote
            </NavLink>
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

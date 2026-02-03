import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedMenuIcon from "./Animations/AnimatedMenuIcon";
import logo from "../assets/imgs/nav-logo.jpg";
import { Smartphone , Store, Send    } from 'lucide-react';
import RippleProvider from "./Animations/RippleProvider";
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Our Services", path: "/services" },
    { name: "Page 3", path: "/page-3" },
    { name: "Page 4", path: "/page-4" },
    { name: "Page 5", path: "/page-5" },
  ];

  // Email obfuscation
  const emailUser = "western";
  const emailDomain = "email.com";

  // Phone number
  const phoneNumber = "+18501234567";

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
    <RippleProvider>
      <header className="relative z-50">
        {/* Utility bar */}
        <div className="bg-white text-black text-sm hidden md:block border-b border-gray-300 ">
          <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-end gap-6">
            <p>
              <Smartphone size={18} strokeWidth={1.5} className="me-1 inline-flex"/>
              <a href={`tel:${phoneNumber}`} className="hover:underline">
                (850) 123-4567
              </a>
            </p>

            <p >
              <Store size={18} strokeWidth={1.5} className="me-1 inline-flex"/>
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>

            <p>
              <Send size={18} strokeWidth={1.5} className="me-1 inline-flex" />
              {renderEmail()}
            </p>
          </div>
        </div>

        {/* Main nav */}
        <div className="bg-gray-100 text-black h-fit py-1">
          <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-between">
            <NavLink to="/" className="h-full flex items-center">
              <img src={logo} alt="Logo" className="h-15 md:h-20 lg:h-25" />
            </NavLink>

            <nav className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className="nav-link">
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                data-ripple
                to="/page-5"
                onClick={() => setOpen(false)}
                className="hidden md:flex rounded-full bg-green-600 border-2 border-green-600 hover:bg-white hover:text-black px-8 py-4 text-center text-white uppercase transition duration-500"
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
          

          {/* Mobile menu */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height] duration-500 bg-white ${
              open ? "max-h-96" : "max-h-0"
            }`}
          >
            <nav className="px-4 py-4 flex flex-col items-center gap-4 border-t border-gray-300">
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

              <a
                data-ripple
                className="w-full uppercase hover:underline flex justify-between rounded-full bg-green-600 border-2 border-green-600 hover:bg-white hover:text-black px-8 py-4 text-center text-white transition duration-500 font-semibold"
                 href={`tel:${phoneNumber}`}>
                get a free quote: (850) 123-4567 <ArrowUpRight className="inline-block" />
              
              </a>
              
            </nav>
          </div>
        </div>
      </header>
    </RippleProvider>
  );
}

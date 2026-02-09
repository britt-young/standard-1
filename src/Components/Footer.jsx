import logo from "../assets/imgs/nav-logo.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import SpeedDialBtn from "./SpeedDialBtn";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "Page4", path: "/page-4" },
  { title: "Privacy", path: "/privacy" },
];

const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-20 px-5 lg:px-0">
        <div className="flex flex-col w-1/3">
          <img
            src={logo}
            alt="business logo"
            className="lg:h-52 flex-initial w-100"
          />
          <p className="text-left mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            minus voluptatibus magni earum id? Dolore ab accusantium
            voluptatibus obcaecati veritatis?
          </p>
          <SpeedDialBtn />
        </div>
        {/* link side */}
        <div className="w-1/3 flex flex-row items-start justify-center gap-20">
          <div className="flex flex-col">
            <h5>Helpful links</h5>
            <ul className="space-y-2">
              {pages.map(({ title, path }) => (
                <li key={title}>
                  <Link
                    to={path}
                    className="-ml-4 group inline-flex items-center gap-0 text-gray-700 transition-all duration-300 hover:text-gray-900"
                  >
                    {/* Arrow */}
                    <span
                      className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                      aria-hidden
                    >
                      <IoMdArrowDropright style={{color: "#14B004"}} size={24} />
                    </span>

                    {/* Text */}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h5>Helpful links</h5>
            <ul className="space-y-2">
              {pages.map(({ title, path }) => (
                <li key={title}>
                  <Link
                    to={path}
                    className="-ml-4 group inline-flex items-center gap-0 text-gray-700 transition-all duration-300 hover:text-gray-900"
                  >
                    {/* Arrow */}
                    <span
                      className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
                      aria-hidden
                    >
                      <IoMdArrowDropright style={{color: "#14B004"}} size={24} />
                    </span>

                    {/* Text */}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* form */}
        <div className="h-72 w-1/3 bg-gray-200 flex items-center justify-center mx-auto my-auto">
          this is a form
        </div>
      </div>
    </div>
  );
};

export default Footer;

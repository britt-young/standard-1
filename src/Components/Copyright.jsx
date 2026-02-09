import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

const pages = [
  { title: "Homepage", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Our Services", path: "/services" },
  { title: "Contact Us", path: "/contact" },
  { title: "Page4", path: "/page-4" },
  { title: "Privacy Policy | Terms & Conditions", path: "/privacy" },
];

const Copyright = () => {
  return (
    <div className="bg-green-900">
      <div className="flex flex-row justify-end px-5 items-center relative z-0 text-gray-50">
        <p>Copyright @2026 Gulf Coast Web Designs & Development</p>
      </div>
    </div>
  );
};

export default Copyright;

// {
//   /* links */
// }
// <div className="w-1/3 flex flex-col items-center justify-start">
//   <h3 className="uppercase mb-4">Site Map</h3>
//   <ul className="gap-1">
//     {pages.map(({ title, path }) => (
//       <li key={title}>
//         <Link
//           to={path}
//           className="-ml-4 group inline-flex items-center gap-0 text-gray-700 transition-all duration-300 hover:text-gray-900"
//         >
//           {/* Arrow */}
//           <span
//             className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2"
//             aria-hidden
//           >
//             <IoMdArrowDropright style={{ color: "#14B004" }} size={24} />
//           </span>

//           {/* Text */}
//           <span className="transition-transform duration-300 group-hover:translate-x-2">
//             {title}
//           </span>
//         </Link>
//       </li>
//     ))}
//   </ul>
// </div>;

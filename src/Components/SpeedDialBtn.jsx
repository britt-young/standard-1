import { useState } from "react";
import { Plus } from "lucide-react";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

const SpeedDialBtn = () => {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Instagram",
      icon: TiSocialInstagram,
      href: "https://www.instagram.com",
    },
    {
      label: "Facebook",
      icon: TiSocialFacebook,
      href: "https://www.facebook.com",
    },
    {
      label: "LinkedIn",
      icon: TiSocialLinkedin,
      href: "https://www.linkedin.com",
    },
  ];

  return (
    <div className="relative flex items-center gap-3 py-5">
      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900 text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-expanded={open}
        aria-label="Quick actions"
      >
        <Plus
          className={`transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      {/* Action buttons */}
      <div
        className={`flex items-center gap-3 py-2 overflow-hidden transition-all duration-500 ease-out ${
          open
            ? "max-w-125 opacity-100"
            : "max-w-0 opacity-0 pointer-events-none"
        }`}
      >
        {actions.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            aria-label={`Open ${label} in a new tab`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gray-200 px-4 py-2 text-sm text-green-900 shadow-md transition-all duration-300 hover:bg-gray-300 hover:-translate-y-1"
          >
            <Icon size={16} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpeedDialBtn;

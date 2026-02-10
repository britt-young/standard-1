import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

const social = [
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

const SocialMedia = () => {
  return (
    <div className="flex flex-row items-center w-full justify-between border-t border-gray-200 pt-4">
      <div>
        <h6>Follow us on social media:</h6>
      </div>
      <div
        className={`flex gap-6 py-2 overflow-hidden transition-all duration-500 ease-out ${
          open
            ? "max-w-125 opacity-100"
            : "max-w-0 opacity-0 pointer-events-none"
        }`}
      >
        {social.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            aria-label={`Open ${label} in a new tab`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-transparent px-4 py-2 text-sm text-green-900 transition-all duration-300  hover:-translate-y-1"
          >
            <Icon size={16} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

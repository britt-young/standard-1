import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import SocialMedia from "../Components/SocialMedia";
import contact from "../assets/imgs/garden-contact.jpg";

const Contact = () => {
  return (
    <div className="mx-auto lg:min-h-screen md:h-140 h-150 relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full lg:h-full md:h-140 h-150 opacity-100 z-0">
        <img
          src={contact}
          alt="Hero Background"
          className="w-full h-full object-cover blur-xs"
        />
        <div className="absolute inset-0 bg-black/30 opacity-50"></div>
      </div>
      <div className="z-10 w-full flex flex-col md:flex-row items-start max-w-7xl">
        <div className="bg-white rounded-lg p-4 w-1/2 flex flex-col items-end">
          <ContactInfo />
          <SocialMedia />
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

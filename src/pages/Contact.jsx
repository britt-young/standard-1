import ContactForm from "../Components/ContactForm";
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
      <div className="z-10 w-full flex flex-col md:flex-row items-center max-w-7xl">
        <div className="bg-white w-1/2 rounded-lg h-100 p-4">
          <h2 className="mb-5">Reach Out To Us!</h2>
          <p>
            Have a question or idea? Fill out the form and we'll get back to you
            soon or reach out to us whichever way your prefer.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 p-6 gap-6">
            <button className="bg-gray-100 text-black hover:bg-gray-50 hover:scale-105 cursor-pointer flex flex-col transition-all duration-300 rounded-lg outline-1 outline-gray-300 p-2">
              <h4>Main Location:</h4>
              <p className="hover:underline">
                123 S Main Street, Tallahassee, FL
              </p>
            </button>
            <div className="bg-gray-100 text-black hover:bg-gray-50 hover:scale-105 flex flex-col transition-all duration-300 rounded-lg outline-1 outline-gray-300 p-2 items-center">
              <h4>Location Hours:</h4>
              <p>Mon - Sat: 9:00am - 6:00pm</p>
            </div>
            <button className="bg-gray-100 text-black hover:bg-gray-50 hover:scale-105 cursor-pointer flex flex-col transition-all duration-300 rounded-lg outline-1 outline-gray-300 p-2">
              <h4>Phone Number:</h4>
              <p className="hover:underline">+1 (123) 456-7890</p>
            </button>
            <button className="bg-gray-100 text-black hover:bg-gray-50 hover:scale-105 cursor-pointer flex flex-col transition-all duration-300 rounded-lg outline-1 outline-gray-300 p-2">
              <h4>Email Address:</h4>
              <p className="hover:underline">email@email.com</p>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

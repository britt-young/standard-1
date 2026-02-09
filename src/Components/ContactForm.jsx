import RippleProvider from "./Animations/RippleProvider";

const ContactForm = () => {
  return (
    <RippleProvider>
      <div className="flex flex-col mx-auto bg-white w-full max-w-lg rounded-xl p-8 shadow-lg">
        {/* Title */}
        <h2 className="text-center mb-6 text-gray-900">
          Get a Free Quote Today
        </h2>

        <form
          className="flex flex-col space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          {/* Name */}
          <label className="flex flex-col text-gray-700">
            Full Name:
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col text-gray-700">
            Email Address:
            <input
              type="email"
              name="email"
              placeholder="Email@email.com"
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          {/* Role */}
          <label className="flex flex-col text-gray-700">
            Your Role:
            <select
              name="role[]"
              multiple
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>

          {/* Message */}
          <label className="flex flex-col text-gray-700">
            Message:
            <textarea
              name="message"
              placeholder="Type your message here"
              className="mt-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-32"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 self-start bg-green-600 w-full rounded-full  border-2 border-green-600 px-8 py-4 text-center text-white uppercase shadow-md shadow-gray-600 hover:bg-transparent hover:text-black transition duration-500 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </RippleProvider>
  );
};

export default ContactForm;

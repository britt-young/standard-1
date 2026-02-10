import { useState } from "react";
import RippleProvider from "./Animations/RippleProvider";
import { Field, Label, Checkbox } from "@headlessui/react";
import { Link } from "react-router-dom";

const FooterContact = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = ["Lawn Care", "Hedges & Weeding", "Structure Construction"];

  const [enabled, setEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Required for Netlify to recognize the form
    formData.append("form-name", form.getAttribute("name"));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setSubmitted(true);
      form.reset();
      setEnabled(false);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting the form.");
    }
  };
  if (submitted) {
    return (
      <div className="flex flex-col mx-auto bg-white w-full max-w-lg rounded-xl p-8 shadow-lg py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Thank you for your message!
        </h2>
        <p className="mt-2 text-gray-600">
          We’ll get back to you as soon as possible.
        </p>
      </div>
    );
  }
  return (
    <RippleProvider>
      <div className="flex flex-col items-center justify-center mx-auto bg-white rounded-xl p-5 shadow-lg lg:h-100 hover:scale-105 transition-all duration-500">
        {/* Title */}
        <h2 className="text-center mb-10 text-gray-900 text-2xl font-semibold">
          Get a Free Quote Today
        </h2>

        <form
          className="grid grid-cols-2 gap-4"
          name="standard-1-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden form metadata for Netlify */}
          <input type="hidden" name="form-name" value="standard-1-contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <label className="flex flex-col text-gray-700 font-medium text-sm">
            Full Name:
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Smith"
              className="mt-1 px-4 py-1 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col text-gray-700 font-medium text-sm">
            Email Address:
            <input
              type="email"
              name="email"
              required
              placeholder="Email@email.com"
              className="mt-1 px-4 py-1 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>

          {/* Service Buttons */}
          <div className="flex flex-col text-gray-700">
            {/* Hidden input for Netlify */}
            <input type="hidden" name="service" value={selectedService} />
            <span className="mb-2 font-medium text-sm">Select a Service:</span>
            <div className="flex flex-row gap-2 lg:w-120">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  name="services"
                  required
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-1 text-sm rounded-md border transition-all duration-200 focus:outline-none cursor-pointer 
                    ${
                      selectedService === service
                        ? "bg-green-900 text-white border-green-900"
                        : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <Field className="flex gap-x-2 col-span-2">
            <div className="flex h-6 items-center">
              <Checkbox
                name="privacy"
                checked={enabled}
                onChange={setEnabled}
                className="group block size-4 rounded-full border bg-gray-50 data-checked:bg-green-900"
                required
              >
                <svg
                  className="stroke-white opacity-0 group-data-checked:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
            </div>
            <Label className="text-sm text-gray-900 content-center">
              By selecting this, you agree to our
              <Link
                to="/privacy-terms"
                className="underline ms-1 hover:text-green-600"
              >
                privacy policy
              </Link>
            </Label>
          </Field>

          {/* Submit Button */}
          <button
            type="submit"
            className=" mt-5 bg-green-900 rounded-full border-2 border-green-900 px-4 py-2 text-center text-white uppercase shadow-md shadow-gray-600 hover:bg-transparent hover:text-black transition duration-500 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </RippleProvider>
  );
};

export default FooterContact;

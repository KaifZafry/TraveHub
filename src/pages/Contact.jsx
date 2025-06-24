import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="text-3xl text-gray-800 my-4 font-bold text-center">Contact Us</h2>
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-16 bg-white">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-blue-900">Travehub</h2>

        <div className="flex items-start gap-4">
          <img src="/assets/icons/phone.png" alt="Phone" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <a href="tel:+9199234923847" className="text-cyan-700 font-medium hover:underline">
              +91-32792374293
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="/assets/icons/email.png" alt="Email" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-sm text-gray-500">e-Mail Address</p>
            <a href="mailto:ops@travehub.com" className="text-cyan-700 font-medium hover:underline">
              ops@travehub.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src="/assets/icons/location.png" alt="Location" className="w-6 h-6 mt-1" />
          <div>
            <p className="text-sm">217A-B Block,</p>
            <p className="text-sm">Aya Nagar, Phase 4</p>
            <p className="text-sm">New Delhi 110047 India</p>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-md mt-10 md:mt-0">
        <div className="bg-cyan-700 text-white p-4 rounded-t-md font-semibold text-lg">
          Get in touch
        </div>
        <form className="space-y-4 bg-white p-4 rounded-b-md shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border w-full p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border w-full p-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Your Number *"
            className="border w-full p-2 rounded"
          />
          <textarea
            placeholder="Message *"
            rows="4"
            className="border w-full p-2 rounded resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-700 text-white py-2 px-6 rounded hover:bg-cyan-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;

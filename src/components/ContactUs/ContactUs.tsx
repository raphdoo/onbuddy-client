import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import the icons you need

const ContactUs: React.FC = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form Submitted", formValues);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12" id="contact">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="md:text-5xl  text-2xl font-bold mb-8 flex mx-auto md:max-w-[60%] uppercase md:leading-[4rem] items-center  justify-center flex-wrap">
          Have Any Question?{" "}
          <span className="text-[#309CFF]"> Contact Us Now</span>
        </h2>
        <p className=" mb-4 text-center w-full ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-8 mb-6">
          <div className="text-center flex items-center gap-2">
            <span className="bg-[#309CFF] p-4 rounded-lg">
              <FaPhone className="text-2xl text-white" />
            </span>
            <div className="flex flex-col items-start">
              <p className="mt-2 font-light text-gray-500">Phone Number</p>
              <p className="mt-2 font-bold">+1 386-688-3295</p>
            </div>
          </div>

          <div className="text-center flex items-center gap-2">
            <span className="bg-[#309CFF] p-4 rounded-lg">
              <FaEnvelope className="text-2xl text-white" />
            </span>
            <div className="flex flex-col items-start">
              <p className="mt-2 font-light text-gray-500">Email</p>
              <p className="mt-2 font-bold">hello@Onbuddy.com</p>
            </div>
          </div>

          <div className="text-center flex items-center gap-2">
            <span className="bg-[#309CFF] p-4 rounded-lg">
              <FaMapMarkerAlt className="text-2xl text-white" />
            </span>
            <div className="flex flex-col items-start">
              <p className="mt-2 font-light text-gray-500">Map Street</p>
              <p className="mt-2 font-bold">8819 Ohio St. South</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
          <label htmlFor="fullName" className="block font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formValues.fullName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex gap-4">
            <div className="lg:w-1/2 lg:mb-4">
              <label htmlFor="subject" className="block font-semibold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="lg:w-1/2 lg:mb-4">
              {" "}
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <label htmlFor="message" className="block font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import Button from "components/common/Button/Button";
import Image from "components/common/Images/Image";
import React from "react";
import { heroSection } from "../../assets/Assets";


const HeroSection: React.FC = () => {
  return (
    <div
      className="min-h-[80%]  relative md:mt-[6%] mt-[20%] flex items-center"
      id="home"
    >
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="  w-full  md:w-1/2 md:pr-8">
          <div className="md:text-6xl text-4xl font-extrabold text-gray-800 mb-4">
            <div className=" pt-4 ">The ultimate HR solution</div>
          </div>
          <p className="text-gray-600 mb-6 md:max-w-[70%] text-justify">
            Onbuddy aims to enhance the onboarding process for new hires in
            organizations by reducing the average onboarding time, minimizing
            the time taken to complete essential onboarding tasks, reducing the
            risk of errors, and significantly optimizing onboarding-related
            expenses
          </p>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white px-11 py-3 rounded-lg"
            label="Register"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8  mt-4 md:mt-0">
          <Image
            src={`${heroSection}`}
            alt="hero image"
            className="max-w-full rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

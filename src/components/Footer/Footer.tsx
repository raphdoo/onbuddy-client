import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#309CFF] text-white p-4 md:p-8 lg:p-12" id="footer">
      <div className="container mx-auto flex flex-col items-center flex-wrap w-full justify-center">
        <div className="w-full flex   lg:w-1/5 mb-4">
          <ul className="flex gap-5">
            <li className="mb-2">
              <a href="#home">Home</a>
            </li>
            <li className="mb-2">
              <a href="/admin/checklist">Checklist</a>
            </li>
            <li className="mb-2">
              <a href="/profile">Profile</a>
            </li>
            <li className="mb-2">
              <a href="/admin/home/socials">Socials</a>
            </li>
          </ul>
        </div>
        <span className="flex gap-4">
          <a href="#">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl" />
          </a>

          <a href="#">
            <FaYoutube className="text-xl" />
          </a>
        </span>
      </div>
      <hr className="border-t border-white my-6" />
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} OnBuddy. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;

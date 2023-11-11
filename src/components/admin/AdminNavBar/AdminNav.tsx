import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { logowhite, user } from "../../../assets/Assets";

import {
  RiHome5Fill,
  IoCalendarNumber,
  PiChatCenteredTextFill,
  PiNotepadFill,
  IoClose,
} from "../../../assets/Icons";
import { useDispatch, useSelector } from "../../../hooks/hooks";
import { toggleProfile } from "../../../store/slices/ModalSlice";
import { links } from "../HomePageLayout/AdminHomePageLayout";
import Collapsible from "components/common/CollapsMenu/Colllaps";

const menuItems = [
  {
    label: "Home",
    icon: <RiHome5Fill className="fill-white text-3xl" />,
    link: "/home",
  },

  {
    label: "Calendar",
    icon: <IoCalendarNumber className="fill-white text-3xl" />,
    link: "/calendar",
  },
  {
    label: "Chat",
    icon: <PiChatCenteredTextFill className="fill-white text-3xl" />,
    link: "/admin/home/socials",
  },
  {
    label: "Tasks",
    icon: <PiNotepadFill className="fill-white text-3xl" />,
    link: "/tasks",
  },
];

const AdminNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const profile = useSelector((state) => state.profileMenu.isOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    dispatch(toggleProfile());
  };
  const logout = () => {
    Navigate("/signout");
  };

  return (
    <nav className="bg-[#0F6FC8] md:px-8 sm:px-6  h-16 flex items-center justify-between fixed w-full ">
      <div className="ml-4 text-white text-xl font-bold">
        <a href="/home" className="">
          <img src={logowhite} alt="logo image" />
        </a>
      </div>

      <div className="flex items-center mr-4">
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-0 right-0 h-screen w-full bg-blue-50 text-white p-4 transform-gpu translate-x-0 transition-transform">
            <div className="relative flex justify-end ">
              <IoClose
                onClick={toggleMobileMenu}
                className="right-0 text-2xl"
                color="black"
              />
            </div>
            <ul className="flex flex-col space-y-4">
              {/* {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-white text-xl">
                    {item.label}
                  </Link>
                </li>
              ))} */}
              {links.map((link) => (
                <div key={link.title}>
                  <Collapsible key={link.title} title={link.title}>
                    {link.link.map((item) => (
                      <Link
                        to={`${item.path}`}
                        key={item.label}
                        className="hover:text-[#309CFF] text-xl text-[#454141] py-2 flex gap-2 font-normal"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="ml-5">-</span>{" "}
                        <li className="list-none">{item.label}</li>
                      </Link>
                    ))}
                  </Collapsible>
                  <div className="h-px bg-black "></div>
                </div>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="text-white text-xl">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative ml-6 cursor-pointer">
          <div
            className="h-8 w-8 rounded-full overflow-hidden"
            onClick={toggleProfileDropdown}
          >
            <img src={user} alt="Profile" className="h-full w-full" />
          </div>

          {profile && (
            <div className="absolute top-10 right-0 bg-white p-2 text-black border rounded shadow">
              <ul className="space-y-2">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          className="ml-2 sm:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FiMenu className="text-white text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

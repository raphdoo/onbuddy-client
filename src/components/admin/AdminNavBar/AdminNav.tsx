import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { logowhite, user } from '../../../assets/Assets'

import {
  RiHome5Fill,
  IoCalendarNumber,
  PiChatCenteredTextFill,
  PiNotepadFill,
  IoClose,
} from '../../../assets/Icons'
import { useDispatch, useSelector } from '../../../hooks/hooks'
import { toggleProfile } from '../../../store/slices/ModalSlice'

const menuItems = [
  {
    label: 'Home',
    icon: <RiHome5Fill className="fill-white text-3xl" />,
    link: '/',
  },

  {
    label: 'Calendar',
    icon: <IoCalendarNumber className="fill-white text-3xl" />,
    link: '/calendar',
  },
  {
    label: 'Chat',
    icon: <PiChatCenteredTextFill className="fill-white text-3xl" />,
    link: '/chat',
  },
  {
    label: 'Tasks',
    icon: <PiNotepadFill className="fill-white text-3xl" />,
    link: '/tasks',
  },
]

const AdminNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dispatch = useDispatch()

  const profile = useSelector((state) => state.profileMenu.isOpen)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleProfileDropdown = () => {
    dispatch(toggleProfile())
  }
  const logout = () => {
    console.log('Logout clicked')
  }

  return (
    <nav className="bg-[#0F6FC8] md:px-8 sm:px-6  h-16 flex items-center justify-between fixed w-full ">
      <div className="ml-4 text-white text-xl font-bold">
        <a href="/" className="">
          <img src={logowhite} alt="logo image" />
        </a>
      </div>

      <div className="flex items-center mr-4">
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-0 right-0 h-screen w-3/4 bg-blue-500 text-white p-4 transform-gpu translate-x-0 transition-transform">
            <div className="relative flex justify-end">
              <IoClose
                onClick={toggleMobileMenu}
                className="right-0 text-2xl "
              />
            </div>
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-white text-xl">
                    {item.label}
                  </Link>
                </li>
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
                  <Link to="/settings">Settings</Link>
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
  )
}

export default AdminNavbar

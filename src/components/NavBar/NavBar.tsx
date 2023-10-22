import React, { useState } from 'react'
import Image from 'components/common/Images/Image'
import { logo } from '../../assets/Assets'

const menuItems: { label: string; link: string }[] = [
  { label: 'Home', link: '#home' },
  { label: 'Features', link: '#feature' },
  { label: 'About us', link: '#about' },
  { label: 'Pricing', link: '#pricing' },
  { label: 'Contact us', link: '#contact' },
]

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white p-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-black">
          <Image src={logo} alt="Logo Image" className="w-12 md:w-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-4 flex-1.5 gap-5 justify-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-black font-semibold shadow-xs text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="text-black border-solid border-[1px] px-[2rem] py-[0.5rem] rounded-md hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-500 border-solid border-[1px] px-[2rem] py-[0.5rem] rounded-md text-white hover:bg-blue-600 transition duration-300"
          >
            Register
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-1/2 bg-gray-800 transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start px-4 justify-start pt-[20%] h-full">
            <button
              onClick={closeMenu}
              className="text-white absolute top-4 right-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {menuItems.map((linkItem, index) => (
              <a
                href={linkItem.link}
                key={index}
                className="text-white text-xl my-2"
              >
                {linkItem.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="#"
                className="bg-blue-white border-solid border-[1px] px-[2rem] py-[0.5rem] rounded-md text-white transition duration-300"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-blue-500 border-solid border-[1px] px-[2rem] py-[0.5rem] rounded-md text-white hover:bg-blue-600 transition duration-300"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

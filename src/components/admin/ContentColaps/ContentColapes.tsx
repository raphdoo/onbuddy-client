import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

interface CollapseProps {
  title?: string
  children: React.ReactNode
}

const ContentCollapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="p-2 mb-4">
      <div
        className="flex items-center gap-5 cursor-pointer"
        onClick={toggleCollapse}
      >
        {isOpen ? (
          <FiMinus size={20} className="bg-black   rounded-full text-white" />
        ) : (
          <FiPlus size={20} className="bg-[#309CFF]  rounded-full text-white" />
        )}
        <h1 className="font-bold  items-center  flex text-xl text-[#309CFF] ">
          {title}
        </h1>
      </div>
      {isOpen && <div className="mt-2 text-xl text-justify ">{children}</div>}
    </div>
  )
}

export default ContentCollapse

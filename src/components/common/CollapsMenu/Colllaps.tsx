import React, { ReactNode, useState } from 'react'

import { IoAddCircleOutline } from 'react-icons/io5'
import { FiMinusCircle } from 'react-icons/fi'
interface CollapsibleProps {
  title: string
  children: ReactNode
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div>
      <div
        onClick={toggleCollapse}
        className="cursor-pointer border-b  border-gray-300 py-4  flex justify-between items-center"
      >
        <div className="font-bold uppercase text-xl  text-gray-500">
          {title}
        </div>
        <div>
          {isCollapsed ? (
            <IoAddCircleOutline className="text-gray-500 " size={30} />
          ) : (
            <FiMinusCircle className="text-gray-500 " size={25} />
          )}
        </div>
      </div>
      {isCollapsed ? null : <div>{children}</div>}
    </div>
  )
}

export default Collapsible

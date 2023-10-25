import React, { useState } from 'react'
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from '../../../assets/Icons'
interface CollapsibleProps {
  title: string
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
        <div className="font-bold">{title}</div>
        <div>
          {isCollapsed ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </div>
      </div>
      {isCollapsed ? null : <div>{children}</div>}
    </div>
  )
}

export default Collapsible

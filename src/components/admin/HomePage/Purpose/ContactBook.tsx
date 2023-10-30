import Collapsible from 'components/common/CollapsMenu/Colllaps'
import React from 'react'

const ContactBook: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Collapsible title="Kelvin">
        {' '}
        <h1>Hey</h1>
      </Collapsible>
    </div>
  )
}

export default ContactBook

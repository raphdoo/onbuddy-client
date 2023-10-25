import Collapsible from 'components/common/CollapsMenu/Colllaps'
import React, { useState } from 'react'

// Sample data for contacts
const contacts = [
  {
    name: 'John Doe',
    program: 'Product Design',
    hub: 'Tech',
    bio:
      'Hello! I’m looking forward to joining the onbuddy team this summer as a product designer intern.',
    imageUrl: '/john-doe.jpg', // Replace with the actual image URL
  },
  {
    name: 'Jane Smith',
    program: 'Software Engineering',
    hub: 'Tech',
    bio: 'Excited to be part of the tech team!',
    imageUrl: '/jane-smith.jpg', // Replace with the actual image URL
  },
  // Add more contacts here
]

const ContactBook: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Collapsible title="Kelvin"></Collapsible>
    </div>
  )
}

export default ContactBook

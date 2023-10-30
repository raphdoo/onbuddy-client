import Image from '../../../components/common/Images/Image'
import React from 'react'
import { AdminHero } from '../../../assets/Assets'
const AdminHeroImage: React.FC = () => {
  return (
    <div className="mt-[70px] flex w-full mx-auto  ">
      <Image src={AdminHero} alt="Admin Hero Section" className="w-full" />
    </div>
  )
}

export default AdminHeroImage

import React from 'react'
import AdminHeroImage from 'components/admin/HomePage/AdminHeroImage'
import AdminHomePageLayout from 'components/admin/HomePageLayout/AdminHomePageLayout'

const AdminHomePage: React.FC = () => {
  return (
    <React.Fragment>
      <AdminHeroImage />
      <AdminHomePageLayout />
    </React.Fragment>
  )
}

export default AdminHomePage

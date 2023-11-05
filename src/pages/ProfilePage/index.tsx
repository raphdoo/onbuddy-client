import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"

import ProfilePage from "components/admin/ProfilePage/ProfilePage"


function Profile() {
  return (
    <div>
      <AdminNavbar />
      <ProfilePage />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default Profile

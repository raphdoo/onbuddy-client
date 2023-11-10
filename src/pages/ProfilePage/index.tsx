import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"

import ProfilePage from "components/admin/ProfilePage/ProfilePage"

interface CurrentUser {
  currentUser: any
}

const Profile: React.FC<CurrentUser> = ({currentUser}) => {
  return (
    <div>
      <AdminNavbar />
      {currentUser && <ProfilePage currentUser={currentUser}/>}
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default Profile

import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import ChangePassword from "components/admin/ChangePassword/ChangePassword"

interface CurrentUser {
  currentUser: any;
}


const index: React.FC<CurrentUser> = ({currentUser}) => {
  return (
    <div>
      <AdminNavbar />
      <ChangePassword currentUser={currentUser}/>
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default index

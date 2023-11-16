import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import EditProfile from "components/admin/EditProfile/EditProfile"


interface CurrentUser {
  currentUser: any;
}

const EditPage: React.FC<CurrentUser> = ({currentUser}) =>{
  return (
    <div>
      <AdminNavbar />
      <EditProfile currentUser={currentUser} />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default EditPage

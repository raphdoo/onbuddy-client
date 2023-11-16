import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import Edit from "components/admin/AdminEdit/AdminEdit"

interface CurrentUser {
  currentUser: any;
}

const AdminEdit: React.FC<CurrentUser> = ({currentUser}) => {
  return (
    <div>
    	<AdminNavbar />
      <Edit currentUser={currentUser}/>
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminEdit

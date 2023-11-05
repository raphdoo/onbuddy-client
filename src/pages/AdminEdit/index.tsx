import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import Edit from "components/admin/AdminEdit/AdminEdit"


function AdminEdit() {
  return (
    <div>
    	<AdminNavbar />
      <Edit />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default AdminEdit

import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import ChangePassword from "components/admin/ChangePassword/ChangePassword"

function index() {
  return (
    <div>
      <AdminNavbar />
      <ChangePassword />
      <AdminFooter />
    </div>
  )
}

export default index

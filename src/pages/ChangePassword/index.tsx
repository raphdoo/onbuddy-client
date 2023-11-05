import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import ChangePassword from "components/admin/ChangePassword/ChangePassword"

function index() {
  return (
    <div>
      <AdminNavbar />
      <ChangePassword />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default index

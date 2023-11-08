import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import WorkDetails from "components/admin/WorkDetails/WorkDetails"

function index() {
  return (
    <div>
      <AdminNavbar />
      <WorkDetails />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default index

import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import EditProfile from "components/admin/EditProfile/EditProfile"


function EditPage() {
  return (
    <div>
      <AdminNavbar />
      <EditProfile />
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default EditPage

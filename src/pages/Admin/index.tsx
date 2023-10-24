import AdminFooter from "components/AdminFooter/AdminFooter"
import AdminNavBar from "components/AdminNavbar/AdminNavbar"
import HeroAdmin from "components/HeroAdmin/HeroAdmin"



function AdminPage () {
  return (
    <div>
			<AdminNavBar />
			<HeroAdmin />
			<AdminFooter />
    </div>
  )
}

export default AdminPage
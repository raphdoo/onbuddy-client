import AdminFooter from "components/AdminFooter/AdminFooter"
import AdminNavBar from "components/AdminNavbar/AdminNavbar"
import AdminHeroSection from "components/AdminHeroSection/AdminHeroSection"



function AdminPage () {
  return (
    <div>
			<AdminNavBar />
			<AdminHeroSection />
			<AdminFooter />
    </div>
  )
}

export default AdminPage
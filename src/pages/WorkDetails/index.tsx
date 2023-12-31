import AdminFooter from "components/admin/AdminFooter/AdminFooter"
import AdminNavbar from "components/admin/AdminNavBar/AdminNav"
import WorkDetails from "components/admin/WorkDetails/WorkDetails"

interface CurrentUser {
  currentUser: any;
}

const index: React.FC<CurrentUser> = ({currentUser}) =>{
  return (
    <div>
      <AdminNavbar />
      <WorkDetails currentUser={currentUser}/>
      <div className="hidden sm:block">
        <AdminFooter />
      </div>
    </div>
  )
}

export default index

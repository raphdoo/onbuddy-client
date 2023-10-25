import { Outlet, Link } from 'react-router-dom'
import AdminNavbar from '../AdminNavBar/AdminNav'
import { useDispatch } from '../../../hooks/hooks'
import { closeProfile } from '../../../store/slices/ModalSlice'

interface LayoutProps {
  children?: React.ReactNode
}

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar />
      <div
        className="flex-1 p-6 mt-[50px]"
        onClick={() => dispatch(closeProfile(false))}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout

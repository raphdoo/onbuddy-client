import { Outlet } from 'react-router-dom'
import AdminNavbar from '../AdminNavBar/AdminNav'
import { useDispatch } from '../../../hooks/hooks'
import { closeProfile } from '../../../store/slices/ModalSlice'

interface LayoutProps {
  children?: React.ReactNode
}

const AdminLayout: React.FC<LayoutProps> = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col h-fit bg-gray-300">
      <AdminNavbar />

      <div
        className="flex-1 p-6  md:px-12 px-2"
        onClick={() => dispatch(closeProfile(false))}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout

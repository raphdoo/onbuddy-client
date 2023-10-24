import Image from 'components/common/Images/Image'
import { logow } from '../../assets/Assets'



const AdminNavBar: React.FC = () => {
 

  return (
    <nav className="bg-[#0F6FC8] p-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-black">
          <Image src={logow} alt="Logo Image" className="h-16" />
        </div>
        
        
        <div className="md:hidden">
          
        </div>
       
      </div>
    </nav>
  )
}

export default AdminNavBar


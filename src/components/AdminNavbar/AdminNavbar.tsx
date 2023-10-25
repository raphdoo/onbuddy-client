import Image from 'components/common/Images/Image'
import { logow } from '../../assets/Assets'
import { messagetext, stickynote, home, calendar, messagetex } from '../../assets/Icons'




const AdminNavBar = () => {
 

  return (
    <nav className="bg-[#0F6FC8] p-2 fixed top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="">
          <Image src={logow} alt="Logo Image" className="h-16" />
        </div>
        <div className="flex space-x-5">
          <a href="" className="">
            <Image src={home} alt="Sticky Note" className="h-10" />
          </a>

          <a href="" className="">
            <Image src={messagetext} alt="Sticky Note" className="h-10" />
          </a>

          <a href="" className="">
            <Image src={calendar} alt="Sticky Note" className="h-10" />
          </a>

          <a href="" className="">
            <Image src={messagetex} alt="Sticky Note" className="h-10" />
          </a>
          
          <a href="" className="">
            <Image src={stickynote} alt="Sticky Note" className="h-10" />
          </a>
        </div>
      </div>
      
    </nav>
  )
}

export default AdminNavBar


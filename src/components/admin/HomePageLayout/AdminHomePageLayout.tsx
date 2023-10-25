import { Outlet, Link } from 'react-router-dom'

import Collapsible from '../../../components/common/CollapsMenu/Colllaps'
import AdminHeroImage from '../HomePage/AdminHeroImage'

interface LayoutProps {
  children?: React.ReactNode
}

interface Link {
  path: string
  label: string
}

interface MenuItem {
  title: string
  link: Link[]
}

const links: MenuItem[] = [
  {
    title: 'How to use our portal',
    link: [
      {
        path: '/admin/home/welcome',
        label: 'Company Welcome',
      },
      {
        path: '/admin/home/purpose',
        label: 'Purpose and Strategy',
      },
    ],
  },
  {
    title: 'Company Welcome',
    link: [
      {
        path: '/',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'Purpose and strategy',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
  {
    title: 'How to use our portal',
    link: [
      {
        path: '',
        label: 'Dashboard',
      },
      {
        path: '',
        label: 'Profile',
      },
    ],
  },
]

const AdminHomePageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AdminHeroImage />
      <div className="flex h-fit bg-gray-300 ">
        <div className=" w-60 px-4">
          <nav>
            {links.map((link) => (
              <Collapsible key={link.title} title={link.title}>
                {link.link.map((item) => (
                  <Link
                    to={`${item.path}`}
                    key={item.label}
                    className="block py-2 font-bold"
                  >
                    {item.label}
                  </Link>
                ))}
              </Collapsible>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminHomePageLayout

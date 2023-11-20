import { Outlet, Link, NavLink } from "react-router-dom";

import Collapsible from "../../../components/common/CollapsMenu/Colllaps";
import AdminHeroImage from "../HomePage/AdminHeroImage";

interface LayoutProps {
  children?: React.ReactNode;
  currentUser?: any
}


interface Link {
  path: string;
  label: string;
}

interface MenuItem {
  title: string;
  link: Link[];
}

export const links: MenuItem[] = [
  {
    title: "Home",
    link: [
      {
        path: "/admin/home",
        label: "How to use the portal",
      },
    ],
  },
  {
    title: "Our Business",
    link: [
      {
        path: "/admin/home/purpose",
        label: "Our Purpose",
      },
      {
        path: "/admin/home/our-value",
        label: "Our Values",
      },
      {
        path: "/admin/home/our-culture",
        label: "Our Culture",
      },
    ],
  },
  {
    title: "Your Program",
    link: [
      {
        path: "/admin/home/contact-books",
        label: "Contact Books",
      },
    ],
  },
  {
    title: "Our Commitments",
    link: [
      {
        path: "/admin/home/diversity",
        label: "Diversity and Inclusion",
      },
      {
        path: "/admin/home/health",
        label: "Health and Wellness",
      },
      {
        path: "/admin/home/learning",
        label: "Learning and Development",
      },
    ],
  },
  {
    title: "Updates",
    link: [
      {
        path: "/admin/home/getting-ready",
        label: "Getting ready for day one",
      },
      {
        path: "/admin/home/one-page",
        label: "One page profile",
      },
    ],
  },
  {
    title: "In app",
    link: [
      {
        path: "socials",
        label: "Socials",
      },
      {
        path: "/admin/checklist",
        label: "Checklist",
      },
    ],
  },
];



const AdminHomePageLayout: React.FC<LayoutProps> = ({currentUser}) => {

  return (
    <div>
      <AdminHeroImage />
      <div className="flex min-h-screen bg-gray-300 mt-10">
        <div className=" md:flex flex-col hidden md:w-[25%] w-full md:px-4 ">
          <nav>
            
            {links.map((link) => (
              <div key={link.title}>
                <Collapsible key={link.title} title={link.title}>
                  {link.link.map((item) => (
                    <Link
                      to={`${item.path}`}
                      key={item.label}
                      className=" hover:text-[#309CFF] text-xl py-2 flex gap-2 font-normal   "
                    >
                      <span className="ml-5">-</span>{" "}
                      <li className="list-none">{item.label}</li>
                    </Link>
                  ))}
                </Collapsible>
                <div className="h-px bg-black "></div>
              </div>
            ))}

            <div className="flex flex-col  gap-4 mt-8 mb-10">
            {currentUser.role === 'admin' && <div className="cursor-pointer border-b  border-gray-300  flex justify-between items-center">
                <Link
                  to="/admin/home/upload"
                  className="font-bold  text-xl text-gray-500  uppercase"
                >
                  Add new Employees
                </Link>
              </div>}
              <div className="cursor-pointer border-b  border-gray-300  flex justify-between items-center">
                <Link
                  to="/admin/home/contact"
                  className="font-bold  text-xl text-gray-500  uppercase"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex-1 md:p-6 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePageLayout;

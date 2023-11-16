import CheckListPage from '../pages/CheckList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage/Index';
import EditPage from '../pages/EditPage/index';
import WorkDetails from '../pages/WorkDetails/index';
import ChangePassword from '../pages/ChangePassword/index';
// import AdminPurpose from "../components/admin/HomePage/Purpose/AdminPurpose";
import ConfirmPassword from 'components/auth/confirm-password';
import ProfilePage from '../pages/ProfilePage/index';
// import AdminWelcome from "../components/admin/HomePage/Purpose/AdminPurpose";
import AdminLayout from 'components/admin/HomePage/AdminLayout';
import AdminHomePageLayout from '../components/admin/HomePageLayout/AdminHomePageLayout';
import AdminProfile from '../pages/Profile/Index';
import { OurPurpose } from 'components/admin/HomePage/HomePages';
import { OurValues } from 'components/admin/HomePage/HomePages/OurValues';
import { OurCulture } from 'components/admin/HomePage/HomePages/OurCulture';
import { ContactBooks } from 'components/admin/HomePage/HomePages/ContactBooks';
import { Diversity } from 'components/admin/HomePage/HomePages/Diversity';
import { Health } from 'components/admin/HomePage/HomePages/Health';
import { Learning } from 'components/admin/HomePage/HomePages/Learning';
import { GettingReady } from 'components/admin/HomePage/HomePages/GettingReady';
import { OnePageProfile } from 'components/admin/HomePage/HomePages/OnePageProfile';
import { SocialPage } from 'components/admin/HomePage/HomePages/Socials';
import { ContactUsPage } from 'components/admin/HomePage/HomePages/ContactUs';
import { WelcomePage } from 'components/admin/HomePage/HomePages/WelcomePage';
import { ForgotPassword } from 'components/auth/forgot';
import { AdminLogin } from 'components/auth/admin-login';
import { Register } from 'components/auth/register';

import AdminEdit from '../pages/AdminEdit/index';

import EventPage from '../pages/Event';
import Event from 'components/Event';
import LandingPage from '../pages/LandingPage';
import EventDetail from 'components/Event/EventDetail';
import { EmployeeLogin } from 'components/auth/employee-login';
import Signout from 'components/auth/signout';

interface CurrentUser {
  currentUser: any;
}

const MainRoutes: React.FC<CurrentUser> = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/confirm" element={<ConfirmPassword />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/signout" element={<Signout />} />

        <Route path="/contact" element={<h1>Contact</h1>} />

        {currentUser && (
          <Route path="edit" element={<EditPage currentUser={currentUser} />} />
        )}

        {currentUser && (
          <Route
            path="changepassword"
            element={<ChangePassword currentUser={currentUser} />}
          />
        )}

        <Route path="WorkDetails" element={<WorkDetails />} />
        {currentUser && (
          <Route
            path="profile"
            element={<ProfilePage currentUser={currentUser} />}
          />
        )}

        {currentUser && (
          <Route
            path="adminedit"
            element={<AdminEdit currentUser={currentUser} />}
          />
        )}

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="event" element={<EventPage />}>
            <Route index={true} element={<Event />} />
            <Route path=":eventId" element={<EventDetail />} />
          </Route>
          <Route path="checklist" element={<CheckListPage />} />

          <Route index element={<AdminHomePageLayout />} />
          <Route path="profile" element={<AdminProfile />} />

          <Route path="home" element={<AdminHomePageLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="purpose" element={<OurPurpose />} />
            <Route path="our-value" element={<OurValues />} />
            <Route path="our-culture" element={<OurCulture />} />
            <Route path="contact-books" element={<ContactBooks />} />
            <Route path="diversity" element={<Diversity />} />
            <Route path="health" element={<Health />} />
            <Route path="learning" element={<Learning />} />
            <Route path="getting-ready" element={<GettingReady />} />
            <Route path="one-page" element={<OnePageProfile />} />
            {currentUser && (
              <Route
                path="socials"
                element={<SocialPage currentUser={currentUser} />}
              />
            )}
            <Route path="events" element={<h1>Events</h1>} />
            <Route path="contact" element={<ContactUsPage />} />
          </Route>
        </Route>

        {currentUser && (
          <Route
            path="/home"
            element={<LandingPage currentUser={currentUser} />}
          />
        )}

        <Route
          path="*"
          element={
            <div>
              <h1>Page not Found 😢 </h1> <Link to={'/'}> Back to Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage/Index'
import AdminLayout from 'components/admin/HomePage/AdminLayout'
import AdminHomePageLayout from '../components/admin/HomePageLayout/AdminHomePageLayout'
import AdminProfile from '../pages/Profile/Index'
import { OurPurpose } from 'components/admin/HomePage/HomePages'
import { OurValues } from 'components/admin/HomePage/HomePages/OurValues'
import { OurCulture } from 'components/admin/HomePage/HomePages/OurCulture'
import { ContactBooks } from 'components/admin/HomePage/HomePages/ContactBooks'
import { Diversity } from 'components/admin/HomePage/HomePages/Diversity'
import { Health } from 'components/admin/HomePage/HomePages/Health'
import { Learning } from 'components/admin/HomePage/HomePages/Learning'
import { GettingReady } from 'components/admin/HomePage/HomePages/GettingReady'
import { OnePageProfile } from 'components/admin/HomePage/HomePages/OnePageProfile'
import { SocialPage } from 'components/admin/HomePage/HomePages/Socials'
import { ContactUsPage } from 'components/admin/HomePage/HomePages/ContactUs'
import { WelcomePage } from 'components/admin/HomePage/HomePages/WelcomePage'

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/admin" element={<AdminLayout />}>
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
            <Route path="socials" element={<SocialPage />} />
            <Route path="events" element={<h1>Events</h1>} />
            <Route path="contact" element={<ContactUsPage />} />
          </Route>
        </Route>

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
  )
}

export default MainRoutes

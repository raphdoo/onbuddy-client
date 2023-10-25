import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage/Index'
import AdminLayout from 'components/admin/HomePage/AdminLayout'
import AdminHomePageLayout from '../components/admin/HomePageLayout/AdminHomePageLayout'
import AdminWelcome from '../components/admin/HomePage/Purpose/AdminPurpose'
import AdminPurpose from '../components/admin/HomePage/Purpose/AdminPurpose'
import ProfilePage from '../pages/ProfilePage/index'
import EditPage from '../pages/EditPage/index'



function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route
            path="edit"
            element={<EditPage/>}
          />

        <Route
            path="profile"
            element={<ProfilePage/>}
        />
        <Route path="/admin" element={<AdminLayout />}>
        
          <Route index element={<AdminHomePageLayout />} />
          
           
          <Route path="home" element={<AdminHomePageLayout />}>
            <Route index element={<h1>This is profile</h1>} />
            <Route path="welcome" element={<AdminWelcome />} />
            <Route path="purpose" element={<AdminPurpose />} />
            <Route path="contact" element={<h1>This is contact</h1>} />
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

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage/Index'
import AdminPage from '../pages/admin/Index'
import AdminLayout from 'components/admin/HomePage/AdminLayout'

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h1>This is Homepage</h1>} />
          <Route path="profile" element={<h1>This is profile</h1>} />
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

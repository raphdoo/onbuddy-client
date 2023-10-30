import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage/Index";
import AdminLayout from "components/admin/HomePage/AdminLayout";
import AdminHomePageLayout from "../components/admin/HomePageLayout/AdminHomePageLayout";
import AdminWelcome from "../components/admin/HomePage/Purpose/AdminPurpose";
import AdminPurpose from "../components/admin/HomePage/Purpose/AdminPurpose";
import EventPage from "../pages/Event";
import EventDetail from "components/Event/EventDetail";
import Event from "components/Event";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePageLayout />} />
          <Route path="profile" element={<EventDetail />} />
          <Route path="event" element={<EventPage />}>
            <Route index={true} element={<Event />} />
            <Route
              path=":eventId"
              element={
                <h1 className="mt-[50px] bg-red-500">
                  This is the event detail
                </h1>
              }
            />
          </Route>
          <Route path="home" element={<AdminHomePageLayout />}>
            <Route index element={<h1>This is profile</h1>} />
            <Route path="welcome" element={<h1>Welcome</h1>} />
            <Route path="purpose" element={<AdminPurpose />} />
            <Route path="contact" element={<h1>This is contact</h1>} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>Page not Found 😢 </h1> <Link to={"/"}> Back to Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;

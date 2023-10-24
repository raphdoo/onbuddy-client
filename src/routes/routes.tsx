import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage/Index";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { ConfirmPassword } from "../pages/confirm-password";
import { ForgotPassword } from "../pages/forgot";
function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/confirm-password" element={<ConfirmPassword />} />

        <Route path="/users" element={<h1>Users</h1>} />

        <Route path="/contact" element={<h1>Contact</h1>} />
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

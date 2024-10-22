import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Testimonial from "./testimonial";
import AboutPage from "./about";
import WorkPage from "./work";
import ContactPage from "./contact";
import LogInPage from "./login";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider để quản lý trạng thái đăng nhập

const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-indigo-600">
          <Nav />
          <Routes>
            {/* Route cho các trang */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LogInPage />} />
            {/* Route mặc định, hiển thị Hero, Project, Testimonial và Footer */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Project />
                  <Testimonial />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Main;

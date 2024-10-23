import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Testimonial from "./testimonial";
import AboutPage from "./about";
import WorkPage from "./work";
import ContactPage from "./contact";
import LogInPage from "./login";
import Footer from "./footer";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider để quản lý trạng thái đăng nhập
import AnimatedOnScroll from "./AnimatedOnScroll"; // Import component AnimatedOnScroll

const Main = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="bg-indigo-600">
          <Nav />
          <Routes>
            {/* Route cho các trang */}
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <AboutPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/work"
              element={
                <PrivateRoute>
                  <WorkPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LogInPage />} />
            {/* Route mặc định, hiển thị Hero, Project, Testimonial và Footer */}
            <Route
              path="/"
              element={
                <>
                  <AnimatedOnScroll>
                    <Hero />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Project />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Testimonial />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Footer />
                  </AnimatedOnScroll>
                </>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default Main;

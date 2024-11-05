import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Testimonial from "./testimonial";
import AboutPage from "./about";
import WorkPage from "./work";
import ContactPage from "./contact";
import LogInPage from "./login";
import Services from "./services";
import Banner from "./banner";
import Subscribe from "./subscribe";
import WeatherApp from "./WeatherApp/WeatherApp";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider để quản lý trạng thái đăng nhập
import AnimatedOnScroll from "./AnimatedOnScroll"; // Import component AnimatedOnScroll

const Main = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Nav />
          <Routes>
            {/* Route cho các trang */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/weather-app" element={<WeatherApp />} />
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
                    <Services />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Testimonial />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Banner />
                  </AnimatedOnScroll>
                  <AnimatedOnScroll>
                    <Subscribe />
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

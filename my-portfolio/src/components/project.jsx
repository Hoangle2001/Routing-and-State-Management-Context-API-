import React from "react";
import { useState, useRef, useEffect } from "react";
import Project1Img from "../assets/project1.png";
import { Link } from "react-router-dom";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Job");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Tỷ lệ tối thiểu để kích hoạt quan sát
    );

    // Sao chép giá trị ref.current vào biến
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [activeTab]); // Thêm activeTab vào dependency để reset lại khi chuyển tab

  const renderProjects = () => {
    switch (activeTab) {
      case "Job":
        return (
          <div className="animate-appear p-5 flex gap-10 justify-center flex-wrap items-center py-10">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="group relative w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg shadow-greyIsh-400/700 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-blue-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center gap-4">
                      <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                        Front-End
                      </h1>
                      <span className="flex items-center text-[#ccc] gap-1">
                        Full-time
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black mt-5">Company's Name</h2>
                      <span className="flex items-center text-[#ccc] mt-4 gap-1">
                        2023 - Present
                      </span>
                    </div>
                    <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                      Working as a front-end developer specializing in React.js,
                      responsible for building and maintaining interactive,
                      responsive web applications. Collaborate closely with the
                      back-end team to implement seamless integrations, focusing
                      on performance optimization and user experience.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        );
      case "Projects":
        return (
          <div ref={ref} className="grid grid-cols-2 gap-4 p-5">
            <Link to="/weather-app">
              <div
                className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse ${
                  isVisible ? "animate-slideInLeft" : "opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="p-8">
                    <div className="text-black uppercase tracking-wide text-sm font-semibold">
                      Weather-App
                    </div>
                    <p className="mt-2 text-slate-500">
                      A real-time weather forecasting tool built with React to
                      deliver accurate and dynamic weather updates.
                    </p>
                  </div>
                  <div className="md:shrink-0 p-5">
                    <img
                      className="rounded-full w-full"
                      src={Project1Img}
                      alt="Project1"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/landing-page">
              <div
                className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse ${
                  isVisible ? "animate-slideInRight" : "opacity-0"
                }`}
              >
                <div className="md:flex">
                  <div className="p-8">
                    <div className="text-black uppercase tracking-wide text-sm font-semibold">
                      Weather-App 2
                    </div>
                    <p className="mt-2 text-slate-500">
                      Another description for the second weather project.
                    </p>
                  </div>
                  <div className="md:shrink-0 p-5">
                    <img
                      className="rounded-full w-full"
                      src={Project1Img}
                      alt="Project2"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-appear bg-blue-50 text-black min-h-screen">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl mt-10">Projects</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mt-6">
        <div className="flex w-64 bg-black p-2 rounded-full">
          {["Job", "Projects"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-1/2 px-4 py-2 font-semibold rounded-full ${
                activeTab === tab
                  ? "text-black bg-white"
                  : "text-white bg-black"
              } hover:bg-black hover:text-white`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* Render Projects with animation */}
      {renderProjects()}
    </div>
  );
};

export default Project;

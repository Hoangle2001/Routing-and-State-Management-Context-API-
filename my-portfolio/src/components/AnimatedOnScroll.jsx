// AnimatedOnScroll.js
import React, { useEffect, useRef, useState } from "react";

const AnimatedOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Khi phần tử xuất hiện trong viewport, thiết lập isVisible là true
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% của phần tử phải hiển thị
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100 animate-appear" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;

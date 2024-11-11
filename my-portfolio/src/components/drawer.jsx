import React, { useEffect, useRef, useState } from "react";

const Drawer = () => {
  const startY = useRef(null);
  const moving = useRef(false);
  const [isOpen, setIsOpen] = useState(false); // Thêm state để điều khiển sự hiển thị của overlay

  useEffect(() => {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");
    const openDrawerBtn = document.getElementById("openDrawerBtn");

    const openDrawer = () => {
      setIsOpen(true); // Mở drawer khi nhấn nút mở
      overlay.style.transition = "opacity 0.5s ease";
      overlay.style.opacity = 1;

      setTimeout(() => {
        drawer.style.transition =
          "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
        drawer.style.transform = "translateY(0)";
      }, 50);
    };

    openDrawerBtn.addEventListener("click", openDrawer);

    const closeDrawer = () => {
      drawer.style.transition = "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
      drawer.style.transform = "translateY(100%)";

      overlay.style.transition = "opacity 0.5s ease";
      overlay.style.opacity = 0;

      setTimeout(() => {
        setIsOpen(false); // Đóng drawer khi nhấn vào overlay
      }, 500);
    };

    const handleMouseDown = (e) => {
      startY.current = e.clientY;
      moving.current = true;

      const onMouseMove = (e) => {
        if (!moving.current) return;
        const moveY = e.clientY - startY.current;
        if (moveY > 0) {
          drawer.style.transition = "";
          drawer.style.transform = `translateY(${moveY}px)`;
        }
      };

      const onMouseUp = (e) => {
        if (!moving.current) return;
        const moveY = e.clientY - startY.current;
        moving.current = false;

        if (moveY > 50) {
          closeDrawer();
        } else {
          drawer.style.transition =
            "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
          drawer.style.transform = "translateY(0)";
        }

        startY.current = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    drawer.addEventListener("mousedown", handleMouseDown);

    const handleOverlayClick = (e) => {
      if (e.target === overlay) {
        closeDrawer();
      }
    };

    overlay.addEventListener("click", handleOverlayClick);

    return () => {
      drawer.removeEventListener("mousedown", handleMouseDown);
      overlay.removeEventListener("click", handleOverlayClick);
      openDrawerBtn.removeEventListener("click", openDrawer);
    };
  }, []);

  return (
    <>
      <button
        id="openDrawerBtn"
        className="h-1/2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Drawer
      </button>

      <div
        id="overlay"
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center ${
          !isOpen ? "hidden" : ""
        }`}
        style={{ opacity: 0 }} // Đặt opacity ban đầu là 0 (ẩn)
      >
        <div
          id="drawer"
          className="w-full rounded-t-lg h-full mt-10 bg-white text-black flex flex-col items-center justify-center"
          style={{ transform: "translateY(100%)" }} // Vị trí ban đầu của drawer (bên dưới màn hình)
        >
          <button
            id="closeDrawerBtn"
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => {
              // Đóng drawer khi nhấn nút Close
              document.getElementById("drawer").style.transform =
                "translateY(100%)";
              setTimeout(() => {
                document.getElementById("overlay").classList.add("hidden");
              }, 500);
            }}
          >
            Close
          </button>
          <p>This is the drawer content.</p>
        </div>
      </div>
    </>
  );
};

export default Drawer;

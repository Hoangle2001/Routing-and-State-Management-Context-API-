import React, { useEffect } from "react";

const Drawer = () => {
  let startY = null;

  useEffect(() => {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");
    const openDrawerBtn = document.getElementById("openDrawerBtn");

    // Mở drawer
    openDrawerBtn.addEventListener("click", () => {
      drawer.classList.add("open");
      overlay.classList.remove("hidden");
      drawer.style.transform = "translateY(0)"; // Đặt lại vị trí khi mở
    });

    // Đóng drawer
    const closeDrawer = () => {
      drawer.classList.remove("open");
      overlay.classList.add("hidden");
    };

    // Xử lý kéo chuột xuống
    const handleMouseDown = (e) => {
      startY = e.clientY;

      const onMouseMove = (e) => {
        const moveY = e.clientY - startY;
        if (moveY > 0) {
          // Chỉ cho phép di chuyển xuống
          drawer.style.transform = `translateY(${moveY}px)`; // Cập nhật vị trí khi kéo xuống
        }
      };

      const onMouseUp = (e) => {
        const moveY = e.clientY - startY;
        if (moveY > 200) {
          // Đóng drawer nếu kéo xuống quá 200px
          closeDrawer();
        } else {
          drawer.style.transform = "translateY(0)"; // Đặt lại vị trí nếu chưa kéo xuống đủ
        }
        startY = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    drawer.addEventListener("mousedown", handleMouseDown);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      drawer.removeEventListener("mousedown", handleMouseDown);
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
        className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
      >
        <div
          id="drawer"
          className="w-full rounded-t-lg h-full mt-10 bg-white text-black flex flex-col items-center justify-center"
        >
          <button
            id="closeDrawerBtn"
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() =>
              document.getElementById("overlay").classList.add("hidden")
            }
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

import React, { useEffect } from "react";

const Drawer = () => {
  let startY = null;
  let moving = false;

  useEffect(() => {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");
    const openDrawerBtn = document.getElementById("openDrawerBtn");

    // Mở drawer
    const openDrawer = () => {
      overlay.classList.remove("hidden");
      overlay.style.transition = "opacity 0.5s ease"; // Thêm hiệu ứng opacity khi mở
      overlay.style.opacity = 1; // Đảm bảo overlay hiển thị với opacity là 1

      // Đảm bảo hiệu ứng transition sẽ được áp dụng trước khi thay đổi vị trí
      setTimeout(() => {
        drawer.style.transition =
          "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
        drawer.style.transform = "translateY(0)"; // Trượt lên khi mở
      }, 50); // Đảm bảo rằng transition có thể chạy
    };

    openDrawerBtn.addEventListener("click", openDrawer);

    // Đóng drawer
    const closeDrawer = () => {
      drawer.style.transition = "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
      drawer.style.transform = "translateY(100%)"; // Trượt xuống khi đóng

      // Từ từ giảm opacity của overlay trong quá trình đóng
      overlay.style.transition = "opacity 0.5s ease"; // Thêm hiệu ứng cho opacity
      overlay.style.opacity = 0; // Giảm opacity của overlay xuống 0

      // Ẩn overlay sau khi đóng drawer
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 500); // Chờ cho hiệu ứng opacity hoàn thành
    };

    // Xử lý kéo chuột xuống để đóng drawer
    const handleMouseDown = (e) => {
      startY = e.clientY;
      moving = true;

      const onMouseMove = (e) => {
        if (!moving) return;
        const moveY = e.clientY - startY;
        if (moveY > 0) {
          drawer.style.transition = ""; // Tắt transition khi kéo
          drawer.style.transform = `translateY(${moveY}px)`; // Cập nhật vị trí khi kéo xuống
        }
      };

      const onMouseUp = (e) => {
        if (!moving) return;
        const moveY = e.clientY - startY;
        moving = false;

        // Chỉ đóng khi kéo qua 50px
        if (moveY > 50) {
          closeDrawer();
        } else {
          drawer.style.transition =
            "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)";
          drawer.style.transform = "translateY(0)"; // Trả lại vị trí ban đầu nếu kéo không đủ
        }

        // Dọn dẹp sự kiện
        startY = null;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    drawer.addEventListener("mousedown", handleMouseDown);

    // Đóng drawer khi click vào overlay (đảm bảo click vào overlay mà không phải drawer)
    const handleOverlayClick = (e) => {
      // Chỉ đóng khi click vào overlay (không phải drawer)
      if (e.target === overlay) {
        closeDrawer();
      }
    };

    overlay.addEventListener("click", handleOverlayClick);

    // Dọn dẹp sự kiện khi component unmount
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
        className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center hidden"
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

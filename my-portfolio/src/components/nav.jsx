import React from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import hook để sử dụng AuthContext

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [animateLogout, setAnimateLogout] = useState(false); // Trạng thái animation cho logout
  const { user, logout } = useAuth(); // Lấy tên người dùng và hàm logout từ context
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset); // Vị trí cuộn trước đó
  const [visible, setVisible] = useState(true); // Trạng thái hiển thị của Nav
  const [isHovered, setIsHovered] = useState(false); // Trạng thái hover cho tên người dùng
  const [isLogoutVisible, setIsLogoutVisible] = useState(false); // Trạng thái hiển thị của nút Log Out
  const [timeoutId, setTimeoutId] = useState(null); // Để lưu id của timeout

  // Kích hoạt animation khi có user (người dùng đăng nhập)
  useEffect(() => {
    if (user) {
      setAnimateLogout(true); // Khi user đăng nhập, kích hoạt animation
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const openMenu = useCallback(() => {
    setToggle(true);
  }, []);

  const closeMenu = useCallback(() => {
    setToggle(false);
  }, []);

  const handleLogout = useCallback(() => {
    const confirmLogout = window.confirm("Bạn muốn Logout?");
    if (confirmLogout) {
      logout(); // Nếu người dùng xác nhận, thực hiện logout
    }
  }, [logout]);

  // Hàm xử lý khi hover vào tên người dùng
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsLogoutVisible(true); // Hiển thị nút Log Out khi hover
    clearTimeout(timeoutId); // Xóa timeout nếu người dùng hover vào
  }, [timeoutId]);

  // Hàm xử lý khi rời khỏi tên người dùng và nút Log Out
  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsLogoutVisible(false);
      setIsHovered(false); // Ẩn khi không còn hover
    }, 3000); // Đặt thời gian ở đây, ví dụ 3000ms
    setTimeoutId(id);
  }, [timeoutId]);

  return (
    <div className="bg-blue-50 text-black">
      <div style={{ height: 72 }}></div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-blue-50 p-4 flex items-center justify-between lg:flex-row transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <Link
            to="/"
            className="font-mono custom-logo text-3xl tracking-wider flex items-center logo bounce-on-load"
          >
            <CgNametag />
            LOGO
          </Link>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link
              to="/about"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
            >
              About
            </Link>
            <Link
              to="/work"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
            >
              Contact
            </Link>
            {user ? (
              <div className="relative inline-block text-left animate-bounce">
                <button
                  className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Hi, {user}
                </button>
                <div
                  className={`absolute right-0 mt-2 w-56 bg-gray-100 rounded-md shadow-lg z-10 transition-transform duration-300 ${
                    isHovered || isLogoutVisible ? "scale-y-100" : "scale-y-0"
                  }`}
                  style={{ transformOrigin: "top" }}
                >
                  <button
                    onClick={handleLogout}
                    onMouseEnter={() => setIsLogoutVisible(true)}
                    onMouseLeave={handleMouseLeave}
                    className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-zinc-400 w-full text-left"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
              >
                Log In
              </Link>
            )}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className="cursor-pointer"
              />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/work" onClick={closeMenu}>
                  Work
                </Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              {user ? (
                <li className="text-xl mb-2 cursor-pointer">
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li className="text-xl mb-2 cursor-pointer">
                  <Link to="/login" onClick={closeMenu}>
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;

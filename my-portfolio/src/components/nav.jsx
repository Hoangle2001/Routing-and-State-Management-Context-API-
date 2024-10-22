import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import hook để sử dụng AuthContext

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useAuth(); // Lấy tên người dùng và hàm logout từ context

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="h-100 flex items-center justify-between p-10 lg:flex-row">
        <div className="h-100">
          <Link
            to="/"
            className="font-mono custom-logo text-3x1 tracking-wider flex items-center"
          >
            <CgNametag />
            LOGO
          </Link>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link
              to="/about"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              About
            </Link>
            <Link
              to="/work"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              Contact
            </Link>
            {user ? (
              <div className="relative inline-block text-left">
                <button className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1">
                  Hi, {user}
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
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
                  <button onClick={logout}>Log Out</button>
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
    </>
  );
};

export default Nav;

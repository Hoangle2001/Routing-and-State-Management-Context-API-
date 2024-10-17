import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom

const Nav = () => {
  const [toggle, setToggle] = useState(false);

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
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;

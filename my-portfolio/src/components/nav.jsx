import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
const nav = () => {
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
          <a
            href="#"
            className="  font-mono custom-logo text-3x1 tracking-wider flex items-center"
          >
            <CgNametag />
            LOGO
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              Work
            </a>
            <a
              href="#"
              className="hover:bg-indigo-800 rounded-full px-5 py-2 text_x1"
            >
              Contact
            </a>
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
              <li className="text-xl mb-2 cursor-pointer">About</li>
              <li className="text-xl mb-2 cursor-pointer">Work</li>
              <li className="text-xl mb-2 cursor-pointer">Contact</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;

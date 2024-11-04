import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import HeroPic from "../assets/boy.jpg";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="flex mt-10 text-black bg-white justify-between items-center p-10 space-x-12 lg:flex-row ssm:flex-col ssm:space-y-10 animate-appear min-h-screen">
      <div className="lg:w-2/3 ssm:w-fit">
        <p className="text-2xl mb-5 text-black">I'm</p>
        <h1 className="text-3xl">Hoang Le</h1>
        <hr />
        <p className="mt-10 text-black font-san">
          As a passionate Front-End Developer, I specialize in creating
          intuitive, responsive, and visually appealing user interfaces. With a
          strong foundation in HTML, CSS, JavaScript, and modern frameworks like
          React, I focus on delivering clean, efficient code that brings designs
          to life. My goal is to craft seamless user experiences and
          continuously evolve with the latest trends and technologies in web
          development. Whether it's building engaging websites or improving
          existing applications, I love turning creative ideas into reality.
        </p>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <Link
            to="https://www.facebook.com/profile.php?id=100004353495201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              size={40}
              className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
            />
          </Link>
          <Link
            to="https://www.instagram.com/th.hoang2908/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              size={40}
              className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
            />
          </Link>
          <Link
            to="https://www.pinterest.com/hl5998/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsPinterest
              size={40}
              className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
            />
          </Link>
          <Link to="/contact">
            <IoIosContact
              size={40}
              className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
            />
          </Link>
        </div>
      </div>
      <div className="w-4/5 flex justify-center ssm:w-fit">
        <img
          src={HeroPic}
          alt=""
          width={80}
          height={80}
          className="rounded-full w-2/3 border-8 border-black avt spin-on-load"
        />
      </div>
    </div>
  );
};

export default hero;

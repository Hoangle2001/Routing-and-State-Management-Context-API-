import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import HeroPic from "../assets/boy.jpg";

const hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-2xl mb-5 text-slate-300">I'm</p>
        <h1 className="text-3xl">Hoang Le</h1>
        <hr />
        <p className="mt-10 text-slate-300 font-san">
          As a passionate Front-End Developer, I specialize in creating
          intuitive, responsive, and visually appealing user interfaces. With a
          strong foundation in HTML, CSS, JavaScript, and modern frameworks like
          React, I focus on delivering clean, efficient code that brings designs
          to life. My goal is to craft seamless user experiences and
          continuously evolve with the latest trends and technologies in web
          development. Whether it's building engaging websites or improving
          existing applications, I love turning creative ideas into reality.
        </p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img
          src={HeroPic}
          alt=""
          width={100}
          height={200}
          className="rounded-full w-full border-8 border-white"
        />
      </div>
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4">About Me</p>
        <p className="text-slate-300">
          Let’s create high-quality user experiences through clean code and
          innovative design with our front-end development services.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
          Show More...
        </button>
        <div className="flex mt-5 space-x-4 cursor-pointer">
          <BsFacebook
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsInstagram
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-4 hover:border-indigo-800 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default hero;

import React from "react";
import BannerPng from "../assets/banner.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="flex items-center justify-center text-black">
      <div className="container py-4 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex items-center">
          <motion.img
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1 className="text-3xl md:text-4xl font-bold !leading-snug">
              Bringing Innovative Front-End Solutions to Life
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <FaBookReader className="text-2xl" />
                <p className="text-lg">Custom-Built Web Solutions</p>
              </motion.div>
              <motion.div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Expertise in Front-End Development</p>
              </motion.div>
              <motion.div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Continuous Support & Maintenance</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

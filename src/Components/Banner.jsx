import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../assets/banner-bg.mp4";
import { Link } from "react-router";
import { Car } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source
          src={bgVideo}
          type="video/mp4"
        />
      </video>

      <motion.div
        className="absolute inset-0 bg-black bg-opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}></motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to TravelEase
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          Explore the world with smooth experiences and beautiful destinations.
        </p>
        <Link
          className="relative outline-0 overflow-hidden bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group mt-5"
          to={"/all-vehicles"}>
          <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300">
            <span className="flex gap-3">
              Find All Vehicles <Car />
            </span>{" "}
          </span>
          <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Banner;

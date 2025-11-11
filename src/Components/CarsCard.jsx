import React from "react";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const CarsCard = ({ car }) => {
  const {
    categories,
    coverImage,
    pricePerDay,
    location,
    vehicleName,
    rating,
    description,
    _id,
  } = car;


  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="card bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl 
                 transition-all duration-300 overflow-hidden group">
      <div className="card bg-base-100 shadow-sm flex grow">
        <figure>
          <img
            className="w-full h-[200px]"
            src={coverImage}
            alt="car image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{vehicleName}</h2>
          <p>{description}</p>
          <div className="flex justify-between mb-2">
            <span className="badge bg-red-500 text-white font-semibold">
              <Car /> {categories}{" "}
            </span>
            <span className="badge bg-green-500 text-amber-400 font-semibold">
              <FaStar /> {rating}{" "}
            </span>
          </div>
          <p className="font-bold">Rent Per Day: ${pricePerDay} </p>
          <p className="font-bold">
            Location: <span className="text-lg text-red-400">{location}</span>{" "}
          </p>

          <div className="card-actions">
            <Link
              to={`/detailsVehicles/${_id}`}
              className="relative overflow-hidden w-full bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group">
              <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300">
                <span className="font-bold flex justify-center">
                  View Details
                </span>
              </span>
              <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            </Link>

            {/* <Link
              className="relative overflow-hidden w-full bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group"
              to={`/detailsVehicles/${_id}`}>
              <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300">
                <span className="font-bold flex justify-center">
                  View Details
                </span>{" "}
              </span>
              <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            </Link> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarsCard;

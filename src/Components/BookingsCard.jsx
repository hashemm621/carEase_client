import React from "react";
import { Link } from "react-router";

const BookingsCard = ({ car,submitCancel }) => {
  const {
    bookingUserEmail,
    coverImage,
    pricePerDay,
    vehicleName,
    categories,
    location,
    owner,
    _id
  } = car;

  return (
    <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-300">
      
      <div className="relative h-40">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#e81c2e] text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
          {categories}
        </span>
      </div>

      
      <div className="p-5 flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{vehicleName}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Owner: <span className="font-semibold">{owner}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Price per day: <span className="font-semibold">${pricePerDay}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Location: <span className="font-semibold">{location}</span>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Booked by: <span className="font-semibold">{bookingUserEmail}</span>
        </p>

        
        <div className="flex justify-between gap-2 mt-4">
          <button onClick={()=>submitCancel(_id)} className="flex-1 py-2 rounded-md font-semibold text-white bg-[#222] hover:bg-[#333] transition">
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default BookingsCard;

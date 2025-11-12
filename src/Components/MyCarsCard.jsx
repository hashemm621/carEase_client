import React from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "react-router";

const MyCarsCard = ({ car, onDelete }) => {
  const {
    coverImage,
    vehicleName,
    owner,
    categories,
    pricePerDay,
    location,
    description,
    createdAt,
    _id,
  } = car;

  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#e81c2e] text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
          {categories}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {vehicleName}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-[#e81c2e]">{owner}</span>
          </p>
          <p className="font-semibold text-gray-700 dark:text-gray-300">
            ${pricePerDay}/day
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Added At:{" "}
          {formatDistanceToNowStrict(new Date(createdAt), {
            addSuffix: true,
          })}
        </p>

        {/* Buttons */}
        <div className="flex justify-between gap-3 mt-4">
          <Link to={`/updateVehicles/${_id}`} className="w-1/3 btn py-2 rounded-md font-semibold text-white bg-[#e81c2e] hover:bg-[#ffff] hover:text-[#c41726] border border-[#c41726] transition">
            Update
          </Link>
          <button
            onClick={() => onDelete(_id)}
            className="w-1/3 py-2 rounded-md font-semibold text-white bg-[#222] hover:bg-[#333] transition">
            Delete
          </button>
          <Link
            to={`/detailsVehicles/${_id}`}
            className="w-1/3 py-2 btn rounded-md font-semibold text-[#e81c2e] border border-[#e81c2e] hover:bg-[#e81c2e] hover:text-white transition">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCarsCard;

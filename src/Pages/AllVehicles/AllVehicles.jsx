import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../../Components/MyContainer";
import CarsCard from "../../Components/CarsCard";

const AllVehicles = () => {
  const data = useLoaderData();
  const [cars, setCars] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    setCars(data);
  }, [data]);

  const handleSort = type => {
    setSortType(type);
    let sorted = [...cars];

    if (type === "priceLow") {
      sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (type === "priceHigh") {
      sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (type === "category") {
      sorted.sort((a, b) => a.categories.localeCompare(b.categories));
    } else if (type === "location") {
      sorted.sort((a, b) => a.location.localeCompare(b.location));
    }

    setCars(sorted);
  };
  return (
    <MyContainer className="my-20">
      <title>All Vehicles</title>
      <h2 className="text-3xl mb-4 text-center lg:text-5xl font-bold text-red-500">
        Explore Our Complete Vehicle Collection
      </h2>
      <p className="text-gray-500 w-3/4 mx-auto text-center">
        Discover a wide range of vehicles tailored for every journey. From sleek
        sedans and rugged SUVs to eco-friendly electric cars, find the perfect
        ride for city drives, road trips, or adventure travel. Browse, compare,
        and choose the ideal vehicle to make your travels smooth, comfortable,
        and memorable.
      </p>

      <div className="flex justify-center mt-10 mb-5">
        <select
          onChange={e => handleSort(e.target.value)}
          value={sortType}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#e81c2e] focus:outline-none">
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="category">Category (A-Z)</option>
          <option value="location">Location (A-Z)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
        {cars && cars.length > 0
          ? cars.map(car => (
              <CarsCard
                key={car._id}
                car={car}
              />
            ))
          : // Loading placeholders
            [1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 dark:bg-gray-700 h-80 rounded-xl"></div>
            ))}
      </div>
    </MyContainer>
  );
};

export default AllVehicles;

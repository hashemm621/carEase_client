import React from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../../Components/MyContainer";
import CarsCard from "../../Components/CarsCard";

const AllVehicles = () => {
  const data = useLoaderData();
  return (
    <MyContainer className="my-20">
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






          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
            {data && data.length > 0
              ? data.map(car => (
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

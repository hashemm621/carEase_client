import React from "react";
import Banner from "../../Components/Banner";
import MyContainer from "../../Components/MyContainer";
import { useLoaderData } from "react-router";
import CarsCard from "../../Components/CarsCard";


const Home = () => {
  const data = useLoaderData();
  return (
    <div className=" bg-base-100">
      <Banner />
      <MyContainer className="py-20">
        <div>
          <h2 className="text-5xl text-[#e81c2e] font-bold">Latest Vehicles</h2>
          <p className="text-gray-400">
            Explore Our Latest Vehicles and make smooth your Travels.
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
        </div>

        <section>
          <div className="dark:bg-gray-900 rounded-2xl p-10 shadow-lg my-16 text-center">
            
  <h2 className="text-4xl font-bold text-red-500 mb-4">
    About TravelEase
  </h2>
  <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
    TravelEase is your ultimate travel companion. Explore a wide range of
    vehicles—from luxury sedans to rugged SUVs and eco-friendly electric cars.
    Whether it's a city drive, weekend getaway, or long road trip, we make
    your travel smooth, safe, and unforgettable. Choose, book, and enjoy your
    perfect ride with ease.
  </p>
</div>

        </section>
      </MyContainer>
    </div>
  );
};

export default Home;




            {/* {data.map(car => (
                <CarsCard
                  key={car._id}
                  car={car}
                />
              ))} */}
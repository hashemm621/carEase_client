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

        <section className="my-20 bg-linear-to-br from-[#e81c2e]/10 to-[#ff6b81]/10 py-16 px-6 rounded-3xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#e81c2e] mb-4">
              Featured Owner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Meet one of our most trusted and dedicated hosts who ensures every
              ride is safe, smooth, and unforgettable.
            </p>

            <div className="relative group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e81c2e]/20 to-[#ff6b81]/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Jonathan Miles
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Los Angeles, USA
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm">
                    ⭐ 4.9 Rating
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm">
                    🚗 12 Cars
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm">
                    📍 Trusted Host
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                  With over 3 years of hosting experience, Jonathan has built a
                  reputation for keeping vehicles spotless, responding promptly,
                  and creating an exceptional experience for every renter.
                </p>

                <button className="bg-[#e81c2e] hover:bg-[#c51423] text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-md">
                  View Owner's Cars
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="dark:bg-gray-900 rounded-2xl p-10 shadow-lg my-16 text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              About TravelEase
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              TravelEase is your ultimate travel companion. Explore a wide range
              of vehicles—from luxury sedans to rugged SUVs and eco-friendly
              electric cars. Whether it's a city drive, weekend getaway, or long
              road trip, we make your travel smooth, safe, and unforgettable.
              Choose, book, and enjoy your perfect ride with ease.
            </p>
          </div>
        </section>
      </MyContainer>
    </div>
  );
};

export default Home;

{
  /* {data.map(car => (
                <CarsCard
                  key={car._id}
                  car={car}
                />
              ))} */
}

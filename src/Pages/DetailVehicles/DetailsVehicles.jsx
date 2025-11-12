import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import LoadingPage from "../../Components/LoadingPage";
import MyContainer from "../../Components/MyContainer";
import { FaStar, FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import { format } from "date-fns";

const DetailsVehicles = () => {
  const car = useLoaderData();
  const { user } = useContext(AuthContext);

  if (!car) return <LoadingPage />;

  const {
    availability,
    categories,
    coverImage,
    createdAt,
    description,
    location,
    owner,
    pricePerDay,
    rating,
    userEmail,
    vehicleName,
  } = car;

  const handleBooking = () => {
    const bookingCar = {
      availability: car.availability,
      categories: car.categories,
      coverImage: car.coverImage,
      createdAt: new Date(),
      description: car.description,
      location: car.location,
      owner: car.owner,
      pricePerDay: car.pricePerDay,
      rating: car.rating,
      userEmail: car.userEmail,
      vehicleName: car.vehicleName,
      vehicleId: car._id,
      bookingUserEmail: user.email,
    };
    fetch(`http://localhost:3000/bookings/${car._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingCar),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to book the vehicle");
        }
        return res.json();
      })
      .then(bookedCar => {
        toast.success("Booking Successful", bookedCar.acknowledged);
      })
      .catch(err => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <MyContainer className="my-16">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={coverImage}
            alt={vehicleName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#e81c2e]">
            {vehicleName}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

          <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-300">
            <FaLocationDot className="text-[#e81c2e]" />
            <span className="font-medium">{location}</span>
          </div>

          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            {[...Array(Math.round(rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 dark:text-gray-300 ml-2">
              {rating} / 5
            </span>
          </div>

          <p className="mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Category:
            </span>{" "}
            {categories}
          </p>

          <p className="mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Availability:
            </span>{" "}
            {availability ? (
              <span className="text-green-500 font-semibold">Available</span>
            ) : (
              <span className="text-red-500 font-semibold">Unavailable</span>
            )}
          </p>

          <p className="mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Price Per Day:
            </span>{" "}
            <span className="text-[#e81c2e] font-bold text-lg">
              ${pricePerDay}
            </span>
          </p>

          <p className="mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Owner:
            </span>{" "}
            {owner}
          </p>

          <p className="mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Email:
            </span>{" "}
            {userEmail}
          </p>

          <p className="mb-4 text-gray-500 dark:text-gray-400 text-sm">
            Posted on: {format(new Date(createdAt), "dd MMM yyyy, HH:mm")}
          </p>

          <button
            onClick={handleBooking}
            className="relative overflow-hidden bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group">
            <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300">
              <span className="flex gap-3 justify-center">Book Now</span>{" "}
            </span>
            <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsVehicles;

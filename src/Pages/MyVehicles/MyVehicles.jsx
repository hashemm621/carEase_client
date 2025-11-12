import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import MyCarsCard from "../../Components/MyCarsCard";
import Swal from "sweetalert2";
import MyContainer from "../../Components/MyContainer";

const MyVehicles = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-cars?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCars(data);
      })
      .catch(err => console.log(err));
  }, [user.accessToken, user.email]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-cars/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => res.json())
          .then(() => {
            setCars(prevCars => prevCars.filter(car => car._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <title>My Vehicles</title>
      <div className="bg-linear-to-r from-[#e81c2e] to-[#ff6b81] text-white py-16 text-center  shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-3">
          Vehicle Details
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Explore your selected car's full specifications and rental information
        </p>
      </div>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20 items-stretch">
          {cars && cars.length > 0
            ? cars.map(car => (
                <MyCarsCard
                  key={car._id}
                  car={car}
                  onDelete={handleDelete}
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
    </div>
  );
};

export default MyVehicles;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import BookingsCard from "../../Components/BookingsCard";
import MyContainer from "../../Components/MyContainer";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/bookings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => res.json())
      .then(data => setBooking(data))
      .catch(err => console.log(err));
  }, [user.accessToken, user.email]);


  const submitCancel = (id) =>{
        Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Cancel it!",
            }).then(result => {
              if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then(res => res.json())
                  .then(() => {
                    setBooking(prevCars => prevCars.filter(car => car._id !== id));
                    Swal.fire({
                      title: "Canceled!",
                      text: "Your ride has been Canceled.",
                      icon: "success",
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
            });
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-[#e81c2e]">
          My Bookings
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          All your vehicle bookings at a glance
        </p>
      </div>

      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20 items-stretch">
          {booking && booking.length > 0
            ? booking.map(car => (
                <BookingsCard
                  key={car._id}
                  car={car}
                  submitCancel={submitCancel}
                />
              ))
            : [1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 dark:bg-gray-700 h-80 rounded-xl"></div>
              ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default MyBookings;

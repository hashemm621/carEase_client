import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyContainer from '../../Components/MyContainer';
import MyCarsCard from '../../Components/MyCarsCard';

const MyVehicles = () => {
    const {user} = useContext(AuthContext);
    const [cars,setCars] = useState([])


    useEffect(()=>{
        fetch(`http://localhost:3000/my-cars?email=${user.email}`,
            {
                headers:{
                    authorization: `Bearer ${user.accessToken}`
                }
            }
        ).then(res=>res.json()).then(data =>{
            setCars(data)
        })
    },[user.accessToken,user.email])


    console.log(cars);
    return (
        <div>
            
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
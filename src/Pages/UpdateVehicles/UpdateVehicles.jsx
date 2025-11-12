import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const UpdateVehicles = () => {
  const data = useLoaderData();
  console.log(data);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      vehicleName: form.vehicleName.value,
      category: form.categories.value,
      coverImage: form.coverImage.value,
      pricePerDay: form.pricePerDay.value,
      location: form.location.value,
      description: form.description.value,
    };
    fetch(`https://travel-ease-server-eight.vercel.app/all-cars/${data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e81c2e] to-[#ff6b81] flex items-center justify-center py-10 px-4">
      <title>Update Vehicles</title>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-5">
        <h1 className="text-3xl font-bold text-center text-[#e81c2e]">
          Update Your Vehicle
        </h1>

        {/* Vehicle Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Vehicle Name
          </label>
          <input
            type="text"
            name="vehicleName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
            defaultValue={data.vehicleName}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Category
          </label>
          <select
            name="categories"
            type="text"
            defaultValue={data.category}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required>
            <option
              value=""
              disabled>
              Select Category
            </option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Sports">Sports</option>
            <option value="Luxury">Luxury</option>
            <option value="Truck">Truck</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Price Per Day ($)
          </label>
          <input
            type="number"
            name="pricePerDay"
            defaultValue={data.pricePerDay}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            defaultValue={data.location}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="availability"
            defaultChecked
            className="w-5 h-5 accent-[#e81c2e]"
          />
          <label className="text-gray-700 dark:text-gray-300 font-semibold">
            Available for Rent
          </label>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={data.description}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Cover Image URL
          </label>
          <input
            type="url"
            name="coverImage"
            defaultValue={data.coverImage}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="Submit"
          className="relative w-full cursor-pointer overflow-hidden bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group">
          <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300">
            <span className="flex gap-3 justify-center">Add Vehicle</span>{" "}
          </span>
          <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
        </button>
      </form>
    </div>
  );
};

export default UpdateVehicles;

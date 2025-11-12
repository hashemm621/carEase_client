import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const AddVehicles = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      vehicleName: form.vehicleName.value,
      owner: form.owner.value,
      category: form.categories.value,
      pricePerDay: form.pricePerDay.value,
      location: form.location.value,
      availability: form.availability.checked,
      description: form.description.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
      createdAt: new Date(),
      categories: form.categories.value,
      rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    };

    try {
      const res = await fetch(
        "https://travel-ease-server-eight.vercel.app/all-cars",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("Vehicle added successfully!");
        form.reset();
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e81c2e] to-[#ff6b81] flex items-center justify-center py-10 px-4">
      <title>Add Vehicles</title>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-5">
        <h1 className="text-3xl font-bold text-center text-[#e81c2e]">
          Add New Vehicle
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
            placeholder="Enter Vehicle Brand Name"
          />
        </div>

        {/* Owner */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            Owner Name
          </label>
          <input
            type="text"
            name="owner"
            value={user.displayName}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
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
            defaultValue={""}
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
            placeholder="Enter Price Per Day"
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
            placeholder="Enter Location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="availability"
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
            placeholder="Added description message for your vehicle"
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
            placeholder="Enter Car Image URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e81c2e]"
            required
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
            User Email
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            name="userEmail"
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

export default AddVehicles;

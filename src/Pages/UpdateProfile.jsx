import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};

  // handle update
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.displayName.value;
    const photo = form.photoURL.value;

    updateUserProfile(name, photo)
      .then(() => {
        Swal.fire({
          title: "Profile Updated!",
          text: "Your profile information has been successfully updated.",
          icon: "success",
          confirmButtonColor: "#e81c2e",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#e81c2e",
        });
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#e81c2e] to-[#ff6b81] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center text-[#e81c2e] mb-6">
          Update Your Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={photoURL || "https://i.ibb.co/Y0t0FZf/default-avatar.png"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-[#e81c2e] shadow-lg"
          />
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="displayName"
              defaultValue={displayName}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#e81c2e] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Profile Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              defaultValue={photoURL}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#e81c2e] focus:outline-none"
            />
          </div>

          {/* Short Bio */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Short Bio
            </label>
            <textarea
              name="bio"
              placeholder="Write a short bio..."
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#e81c2e] focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#e81c2e] text-white font-semibold py-2 rounded-md hover:bg-[#ff4d4d] transition-all duration-300"
          >
            Save Changes
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfile;

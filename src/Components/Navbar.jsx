import React, { useContext, useEffect, useState } from "react";
import brandLogo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import { LogOut, LogOutIcon, User2Icon } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa";
import { ImBoxAdd } from "react-icons/im";


const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

      useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const handleTheme = checked => {
        setTheme(checked ? "dark" : "light");
      };



    const links = (
  <>
    <li>
      <NavLink
        
        to={"/"}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to={"/all-vehicles"}>All Vehicles</NavLink>
    </li>
    <li>
      <NavLink to={"/add-vehicles"}>Add Vehicles</NavLink>
    </li>
    <li>
      <NavLink to={"/my-bookings"}>My Bookings</NavLink>
    </li>
    <li>
      <NavLink to={"/my-vehicles"}>My Vehicles</NavLink>
    </li>
  </>
);
  return (
    <nav className="shadow-sm nav-bg bg-black opacity-80 py-2">
      <MyContainer className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#e81c2e] shadow-none border-0 text-white
                btn-hover-header
                hover:text-[#e81c2e]
               transition duration-300 ease-in-out
               hover:scale-105 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn bg-transparent border-0 shadow-none text-xl">
            <img
              className="w-12 rounded-full"
              src={brandLogo}
              alt="brand logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">


        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle avatar">
              <div className="w-9 border-2 border-[#e81c2e] rounded-full">
                <img
                  alt="user profile image"
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    <User2Icon/>
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-gray-700 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>
              <input
                onChange={e => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle"
              />

              <li>
                <button
                onClick={signOutUser}
            className="relative overflow-hidden bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group"
            to={"/register"}>
            <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300"><span className="flex gap-3">Logout <LogOut/></span> </span>
            <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
          
            className="relative outline-0 overflow-hidden bg-[#e81c2e] text-white border-0 shadow-none px-5 py-2 font-semibold rounded-md transition-all duration-300 group"
            to={"/register"}>
            <span className="relative z-10 group-hover:text-[#e81c2e] transition-colors duration-300"><span className="flex gap-3">Register <LogOut className="rotate-180"/></span> </span>
            <span className="absolute inset-0 bg-base-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        )}


          
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;

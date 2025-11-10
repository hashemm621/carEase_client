import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import AllVehicles from "../Pages/AllVehicles/AllVehicles";
import AddVehicles from "../Pages/AddVehicles/AddVehicles";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyVehicles from "../Pages/MyVehicles/MyVehicles";
import Register from "../Pages/Loging/Register";
import Signin from "../Pages/Loging/Signin";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles />,
      },
      {
        path: "/add-vehicles",
        element: <AddVehicles />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/my-vehicles",
        element: <MyVehicles />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

export default router;

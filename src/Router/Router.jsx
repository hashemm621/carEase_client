import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import AllVehicles from "../Pages/AllVehicles/AllVehicles";
import AddVehicles from "../Pages/AddVehicles/AddVehicles";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyVehicles from "../Pages/MyVehicles/MyVehicles";
import Register from "../Pages/Loging/Register";
import Signin from "../Pages/Loging/Signin";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PriveteRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import DetailVehicles from "../Pages/DetailVehicles/DetailVehicles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-cars"),
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles />,
        loader: () => fetch("http://localhost:3000/all-cars"),
      },
      {
        path: "/add-vehicles",
        element: (
          <PrivateRoute>
            <AddVehicles />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicles />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/detailsVehicles",
        element: (
          <PrivateRoute>
            <DetailVehicles/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

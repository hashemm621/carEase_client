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
import DetailsVehicles from "../Pages/DetailVehicles/DetailsVehicles";
import UpdateVehicles from "../Pages/UpdateVehicles/UpdateVehicles";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://travel-ease-server-eight.vercel.app/latest-cars"),
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles />,
        loader: () =>
          fetch("https://travel-ease-server-eight.vercel.app/all-cars"),
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
        path: "/detailsVehicles/:id",
        element: (
          
            <DetailsVehicles />
          
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-ease-server-eight.vercel.app/details-car/${params.id}`
          ),
      },
      {
        path: "/updateVehicles/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicles />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-ease-server-eight.vercel.app/all-cars/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;

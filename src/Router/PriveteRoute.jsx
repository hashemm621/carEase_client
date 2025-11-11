import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Components/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <LoadingPage/>
  }

  if (!user) {
    return (
      <Navigate
        state={location?.pathname}
        to="/register"></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;

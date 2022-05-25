import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "./routes";

export const PrivateRoute = () => {
  const isLogged = JSON.parse(localStorage.loginValidation ?? false) === true;

  return isLogged ? <Outlet /> : <Navigate to={LOGIN} />;
};

export default PrivateRoute;

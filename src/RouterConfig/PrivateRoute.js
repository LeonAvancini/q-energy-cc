import { Navigate, Outlet } from "react-router-dom";
import TabsComponent from "../components/TabsComponent";
import { LOGIN } from "./routes";

export const PrivateRoute = () => {
  const isLogged = JSON.parse(localStorage.loginValidation ?? false) === true;

  return isLogged ? (
    <>
      <TabsComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to={LOGIN} />
  );
};

export default PrivateRoute;

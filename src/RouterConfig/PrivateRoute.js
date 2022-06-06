import { Navigate, Outlet } from "react-router-dom";

import TabsComponent from "../components/TabsComponent";
import { LOGIN } from "./routes";

export const PrivateRoute = () => {
  const isLogged = JSON.parse(localStorage.loginValidation ?? false) === true;

  return isLogged ? (
    <div style={{ background: "#ffffff" }}>
      <TabsComponent />
      <Outlet />
    </div>
  ) : (
    <Navigate to={LOGIN} />
  );
};

export default PrivateRoute;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

import { DASHBOARD, HOME, LOGIN } from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <Header />
        <main style={{ padding: "0px 30px" }}>
          <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route exact path={HOME} element={<Home />} />
              <Route exact path={DASHBOARD} element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;

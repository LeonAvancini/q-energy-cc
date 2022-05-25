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
      <Header />
      <main>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route exact path={HOME} element={<Home />} />
            <Route exact path={DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;

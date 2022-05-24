import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

const AppRouter = () => {
  //TODO: Create a file with routes
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path={"/"} render={Home} />
          <Route exact path={"/login"} render={Login} />
          <Route exact path={"/dashboard"} render={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;

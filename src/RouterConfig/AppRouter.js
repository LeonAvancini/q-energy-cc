import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import { DASHBOARD, HOME, LOGIN } from "./routes";

const DivStyled = styled.div`
  height: 100vh;
  position: relative;
`;

const MainStyled = styled.main`
  padding: 0px 30px;
  min-height: 100vh;
`;

const AppRouter = () => {
  return (
    <Router>
      <DivStyled>
        <Header />
        <MainStyled>
          <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route exact path={HOME} element={<Home />} />
              <Route exact path={DASHBOARD} element={<Dashboard />} />
            </Route>
          </Routes>
        </MainStyled>
        <Footer />
      </DivStyled>
    </Router>
  );
};

AppRouter.propTypes = {};

export default AppRouter;

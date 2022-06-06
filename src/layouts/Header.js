import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { LOGIN } from "../RouterConfig/routes";
import "./styles.css";

export const Header = () => {
  const isLogged = JSON.parse(localStorage.loginValidation ?? false) === true;
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("loginValidation", false);
    navigate(LOGIN);
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: "30px" }}
    >
      <Grid item>
        <img
          width="179"
          height="67"
          src="https://qenergy.b-cdn.net/wp-content/uploads/Q-Energy.svg"
          alt="q energy"
        />
      </Grid>
      <Grid>
        {isLogged && (
          <Button variant="contained" onClick={handleLogOut}>
            <Typography className={"logoutButton"} variant="body2">
              Logout
            </Typography>
            <LogoutIcon />
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

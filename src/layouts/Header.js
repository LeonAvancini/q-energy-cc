import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "styled-components";

import { LOGIN } from "../RouterConfig/routes";

const GridStyled = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;
const TypographyStyled = styled(Typography)`
text-transform:none;
  @media (max-width: 600px){
    display: none;
  }
}
`;

export const Header = () => {
  const isLogged = JSON.parse(localStorage.loginValidation ?? false) === true;
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("loginValidation", false);
    navigate(LOGIN);
  };

  return (
    <GridStyled container>
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
            <TypographyStyled mr={1} variant="body1">
              Logout
            </TypographyStyled>
            <LogoutIcon />
          </Button>
        )}
      </Grid>
    </GridStyled>
  );
};

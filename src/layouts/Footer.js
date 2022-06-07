import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const GridStyled = styled(Grid)`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
`;

export const Footer = () => {
  return (
    <GridStyled container>
      <Grid item xs padding={3}>
        <Typography align="center">
          QEnergy Challenge - Avancini Leon
        </Typography>
      </Grid>
    </GridStyled>
  );
};

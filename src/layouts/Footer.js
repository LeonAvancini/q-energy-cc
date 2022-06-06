import { Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#ffffff",
      }}
    >
      <Grid item xs padding={3}>
        <Typography align="center">
          QEnergy Challenge - Avancini Leon
        </Typography>
      </Grid>
    </Grid>
  );
};

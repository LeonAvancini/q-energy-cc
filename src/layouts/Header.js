import { Grid } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    //   Maybe can I put logo and UsearName
    <Grid
      container
      justifyContent={"center"}
      marginBottom="40px"
      paddingTop="20px"
    >
      <Grid item>
        <img
          width="179"
          height="67"
          src="https://qenergy.b-cdn.net/wp-content/uploads/Q-Energy.svg"
          alt="q energy"
        />
      </Grid>
    </Grid>
  );
};

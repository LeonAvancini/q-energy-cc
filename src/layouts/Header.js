import { Grid } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    //   Maybe can I put logo and UsearName
    <Grid container justifyContent={"center"} padding={3}>
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

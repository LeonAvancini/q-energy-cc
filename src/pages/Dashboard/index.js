import { Grid } from "@mui/material";
import React from "react";
import data from "../../data-mockup.json";
import GeographicalDistributionChart from "./Charts/GeographicalDistributionChart";
import KwsGeneratedChart from "./Charts/KwsGeneratedChart";
import ProjectStatus from "./Charts/ProjectStatusChart";
import WindTurbinesChart from "./Charts/WindTurbinesChart";

export const Dashboard = () => {
  const containerStyled = {
    margin: "20px 0px",
    background: "white",
    borderRadius: "15px",
    padding: "10px",
    border: "1px solid #005bbe",
  };

  console.log("data", data.projects);
  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={12} sm={5} style={containerStyled}>
        <ProjectStatus data={data.projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <WindTurbinesChart data={data.projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <KwsGeneratedChart data={data.projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <GeographicalDistributionChart data={data.projects} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

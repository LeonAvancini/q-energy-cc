import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AdquisisionPerYearChart from "./Charts/AdquisisionPerYearChart";
import GeographicalDistributionChart from "./Charts/GeographicalDistributionChart";
import KwsGeneratedChart from "./Charts/KwsGeneratedChart";
import ProjectStatus from "./Charts/ProjectStatusChart";
import WindTurbinesChart from "./Charts/WindTurbinesChart";

const containerStyled = {
  margin: "20px 0px",
  background: "white",
  borderRadius: "15px",
  padding: "10px",
  border: "1px solid #005bbe",
  maxWidth: "700px",
};

export const Dashboard = () => {
  const projects = useSelector((state) => state.projectInfo);

  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={12} sm={5} style={containerStyled}>
        <ProjectStatus data={projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <WindTurbinesChart data={projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <KwsGeneratedChart data={projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        <GeographicalDistributionChart data={projects} />
      </Grid>
      <Grid item xs={12} sm={5} style={containerStyled}>
        {/* <GeographicalDistributionChart data={projects} /> */}
        <AdquisisionPerYearChart data={projects} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

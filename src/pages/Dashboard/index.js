import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AdquisisionPerYearChart from "./Charts/AdquisisionPerYearChart";
import GeographicalDistributionChart from "./Charts/GeographicalDistributionChart";
import KwsGeneratedChart from "./Charts/KwsGeneratedChart";
import ProjectStatus from "./Charts/ProjectStatusChart";
import WindTurbinesChart from "./Charts/WindTurbinesChart";
import styled from "styled-components";

const GridStyled = styled(Grid)`
  background: white;
  border-radius: 15px;
  border: 1px solid #005bbe;
  max-width: 700px;
  padding: 10px;
  margin: 20px 4px !important;
`;

export const Dashboard = () => {
  const projects = useSelector((state) => state.projectInfo);

  return (
    <Grid container justifyContent="space-around">
      <GridStyled item xs={12} sm={5}>
        <ProjectStatus data={projects} />
      </GridStyled>
      <GridStyled item xs={12} sm={5}>
        <WindTurbinesChart data={projects} />
      </GridStyled>
      <GridStyled item xs={12} sm={5}>
        <KwsGeneratedChart data={projects} />
      </GridStyled>
      <GridStyled item xs={12} sm={5}>
        <GeographicalDistributionChart data={projects} />
      </GridStyled>
      <GridStyled item xs={12} sm={5}>
        <AdquisisionPerYearChart data={projects} />
      </GridStyled>
    </Grid>
  );
};

export default Dashboard;

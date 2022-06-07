import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
`;
export const WindTurbinesChart = ({ data }) => {
  const projectWindTurbines = data.reduce(
    (acum, act) => {
      return {
        projects_name: [...acum.projects_name, act.project_name],
        wind_turbines_per_project: [
          ...acum.wind_turbines_per_project,
          act.wind_turbines.length,
        ],
      };
    },
    { projects_name: [], wind_turbines_per_project: [] }
  );
  const windTurbinesChartStatus = {
    type: "bar",
    data: {
      labels: projectWindTurbines.projects_name,
      datasets: [
        {
          label: "Wind turbines",
          data: projectWindTurbines.wind_turbines_per_project,
        },
      ],
    },
  };

  return (
    <>
      <Typography variant="h6" align="center">
        Wind turbines per project
      </Typography>
      <ImgStyled
        alt="wind turbines quantity chart"
        src={`https://quickchart.io/chart?c=${JSON.stringify(
          windTurbinesChartStatus
        )}`}
      />
    </>
  );
};

export default WindTurbinesChart;

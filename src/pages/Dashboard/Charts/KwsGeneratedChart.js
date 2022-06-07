import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
`;

const KwsGeneratedChart = ({ data }) => {
  const KwsGeneratedPerProject = data.reduce(
    (acum, act) => {
      return {
        projects_name: [...acum.projects_name, act.project_name],
        kws_per_project: [...acum.kws_per_project, act.total_kW],
      };
    },
    { projects_name: [], kws_per_project: [] }
  );

  const totalKwsChartStatus = {
    type: "horizontalBar",
    data: {
      labels: KwsGeneratedPerProject.projects_name,
      datasets: [
        {
          label: "Total kWs",
          data: KwsGeneratedPerProject.kws_per_project,
        },
      ],
    },
  };

  return (
    <>
      <Typography variant="h6" align="center">
        Total kWs generated
      </Typography>
      <ImgStyled
        alt="total kWs generated chart"
        src={`https://quickchart.io/chart?c=${JSON.stringify(
          totalKwsChartStatus
        )}`}
      />
    </>
  );
};

export default KwsGeneratedChart;

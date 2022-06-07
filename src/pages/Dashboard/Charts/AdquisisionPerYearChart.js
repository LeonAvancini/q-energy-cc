import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
`;

export const AdquisisionPerYearChart = ({ data }) => {
  const projectWindTurbines = data.reduce((acum, act) => {
    const formatDate = act.acquisition_date.split(".");
    const getYear = formatDate[2];
    if (Object.keys(acum).includes(getYear)) {
      return {
        ...acum,
        [getYear]: acum[getYear] + 1,
      };
    } else {
      return { ...acum, [getYear]: 1 };
    }
  }, {});

  const AdquisisionPerYearChartStatus = {
    type: "line",
    data: {
      labels: Object.keys(projectWindTurbines),
      datasets: [
        {
          label: "Projects",
          data: Object.keys(projectWindTurbines).map(
            (yearQuantity) => projectWindTurbines[yearQuantity]
          ),
          fill: true,
          borderColor: "blue",
        },
      ],
    },
  };

  return (
    <>
      <Typography variant="h6" align="center">
        Timeline of acquisition (years)
      </Typography>
      <ImgStyled
        alt="wind turbines quantity chart"
        src={`https://quickchart.io/chart?c=${JSON.stringify(
          AdquisisionPerYearChartStatus
        )}`}
      />
    </>
  );
};

export default AdquisisionPerYearChart;

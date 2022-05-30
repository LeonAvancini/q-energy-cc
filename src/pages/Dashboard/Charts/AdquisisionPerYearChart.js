import React from "react";
import { Typography } from "@mui/material";

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
        Timeline of acquisition by years
      </Typography>
      <img
        style={{ width: "100%", height: "auto" }}
        alt="wind turbines quantity chart"
        src={`https://quickchart.io/chart?c=${JSON.stringify(
          AdquisisionPerYearChartStatus
        )}`}
      />
    </>
  );
};

export default AdquisisionPerYearChart;

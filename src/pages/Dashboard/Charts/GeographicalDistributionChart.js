import React from "react";
import { Typography } from "@mui/material";

export const GeographicalDistributionChart = ({ data }) => {
  const projectsPerCountry = data.reduce(
    (acum, act) => {
      let formatObjectParam = act.country.toLowerCase();
      if (Object.keys(acum).includes(formatObjectParam)) {
        return {
          ...acum,
          total: acum.total + 1,
          [formatObjectParam]: acum[formatObjectParam] + 1,
        };
      } else {
        return { ...acum, [formatObjectParam]: 1, total: acum.total + 1 };
      }
    },
    { total: 0 }
  );

  const GeographicalDistributionChartValues = {
    type: "doughnut",
    data: {
      labels: ["Germany", "Spain", "UK"],
      datasets: [
        {
          data: [
            projectsPerCountry.germany,
            projectsPerCountry.spain,
            projectsPerCountry.uk,
          ],
        },
      ],
    },
    options: {
      plugins: {
        doughnutlabel: {
          labels: [
            { text: projectsPerCountry.total, font: { size: 20 } },
            { text: "total" },
          ],
        },
      },
    },
  };

  return (
    <>
      <Typography variant="h6" align="center">
        Project Status
      </Typography>
      <img
        style={{ width: "100%", height: "auto" }}
        alt="project status chart"
        src={`https://quickchart.io/chart?c=${JSON.stringify(
          GeographicalDistributionChartValues
        )}`}
      />
    </>
  );
};

export default GeographicalDistributionChart;

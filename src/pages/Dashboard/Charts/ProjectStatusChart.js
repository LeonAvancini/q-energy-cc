import React from "react";
import { Typography } from "@mui/material";

export const ProjectStatusChart = ({ data }) => {
  const projectStatus = data.reduce((acum, act) => {
    let formatObjectParam = act.project_status.replace(/ /g, "").toLowerCase();
    if (Object.keys(acum).includes(formatObjectParam)) {
      return {
        ...acum,
        [formatObjectParam]: acum[formatObjectParam] + 1,
      };
    } else {
      return { ...acum, [formatObjectParam]: 1 };
    }
  }, {});

  const projectStatusChartValues = {
    type: "pie",
    data: {
      labels: ["Execution", "In Development", "Acquisition"],
      datasets: [
        {
          data: [
            projectStatus.execution,
            projectStatus.indevelopment,
            projectStatus.acquisition,
          ],
        },
      ],
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
          projectStatusChartValues
        )}`}
      />
    </>
  );
};

export default ProjectStatusChart;

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import ProjectForm from "../../components/ProjectForm";
import data from "../../data-mockup.json";
import tableColumns from "./ProjectDataGridElements/columnTemplate";

export const Home = () => {
  const [projects, setProjects] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProjects(data.projects);
  }, []);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleAddProject = (project) => {
    let lastProject = projects[projects.length - 1];
    setProjects((actualProjects) => [
      ...actualProjects,
      { id: lastProject.id + 1, ...project },
    ]);
  };

  const handleCommit = (projectElement) => {
    const newProjects = projects.map((project) => {
      if (project.id === projectElement.id) {
        return {
          ...project,
          [projectElement.field]: `${projectElement.value}`,
        };
      } else {
        return { ...project };
      }
    });
    setProjects(newProjects);
  };

  const columns = [
    ...tableColumns,
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();
          let { id } = params.row;
          const newProjects = projects.filter((project) => project.id !== id);
          setProjects(newProjects);
        };
        return (
          <Button
            variant="contained"
            color="error"
            onClick={onClick}
            style={{ textTransform: "none" }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  if (!projects || !projects.length) {
    return (
      <Typography align="center" variant="h4">
        No data available :(
      </Typography>
    );
  }

  return (
    <div style={{ width: "100%", height: 500 }}>
      <Grid container marginBottom={2}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ textTransform: "none" }}
        >
          Add a project
        </Button>
      </Grid>

      <DataGrid
        style={{ background: "#fafafa" }}
        rows={projects}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        disableDensitySelector
        onCellEditCommit={handleCommit}
      />

      <Modal open={isOpen} onClose={handleClose}>
        <Box>
          <ProjectForm newProject={handleAddProject} closeModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default Home;

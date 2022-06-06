import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import ProjectForm from "../../components/ProjectForm";
import tableColumns from "./ProjectDataGridElements/columnTemplate";
import { useDispatch, useSelector } from "react-redux";
import { saveProjectInfo } from "../../redux/actions/projectActions";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = useSelector((state) => state.projectInfo);
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleAddProject = (project) => {
    let lastProject = projects[projects.length - 1];
    console.log("TEST", project);
    let newProjects = [...projects, { id: lastProject.id + 1, ...project }];

    dispatch(saveProjectInfo(newProjects));
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
    dispatch(saveProjectInfo(newProjects));
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
          dispatch(saveProjectInfo(newProjects));
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
    <div style={{ width: "100%", margin: "20px 0px", height: 500 }}>
      <Grid container marginBottom={2}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ textTransform: "none", marginLeft: "1.3rem" }}
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

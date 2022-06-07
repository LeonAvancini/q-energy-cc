import React, { useState } from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

import ProjectForm from "../../components/ProjectForm";
import tableColumns from "./ProjectDataGridElements/columnTemplate";
import { saveProjectInfo } from "../../redux/actions/projectActions";

const DivStyled = styled.div`
  width: 100%;
  margin: 20px 0px;
  height: 500px;
`;
const ButtonStyled = styled(Button)`
  text-transform: none !important;
  margin-left: 1.3rem !important;
`;

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = useSelector((state) => state.projectInfo);
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleAddProject = (project) => {
    let lastProject = projects[projects.length - 1];
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
            style={{ textTransform: "none" }}
            variant="contained"
            color="error"
            onClick={onClick}
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
    <DivStyled>
      <Grid container marginBottom={2}>
        <ButtonStyled variant="contained" onClick={handleOpen}>
          Add a project
        </ButtonStyled>
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
    </DivStyled>
  );
};

export default Home;

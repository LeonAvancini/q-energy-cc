import React, { memo, useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Paper,
  Popper,
  Typography,
  Button,
  Grid,
  Modal,
} from "@mui/material";

import ProjectForm from "../../components/ProjectForm";
import data from "../../data-mockup.json";

const renderCellExpand = (params) => {
  return (
    <GridCellExpand
      value={params.value || ""}
      width={params.colDef.computedWidth}
    />
  );
};

const isOverflown = (element) => {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
};

const GridCellExpand = memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = useRef(null);
  const cellDiv = useRef(null);
  const cellValue = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFullCell, setShowFullCell] = useState(false);
  const [showPopper, setShowPopper] = useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: "center",
        lineHeight: "24px",
        width: 1,
        height: 1,
        position: "relative",
        display: "flex",
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: 1,
          width,
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: "-17" }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  );
});

export const Home = () => {
  const [projects, setProjects] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProjects(data.projects);
  }, []);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

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

  const handleAddProject = (project) => {
    console.log("handleAddProject", project);
    setProjects((actualProjects) => [
      ...actualProjects,
      { id: 21, ...project },
    ]);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      width: 70,
      description: "This column is not sortable.",
    },
    {
      field: "project_name",
      headerName: "Project Name",
      width: 130,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
    },

    {
      field: "operating",
      headerName: "Operating",
      type: "boolean",
      width: 100,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
      valueGetter: (params) => (params.row.operating === "true" ? true : false),
    },
    {
      field: "project_status",
      headerName: "Status",
      width: 130,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Acquisition", "In Developement", "Execution"],
    },
    {
      field: "technology",
      headerName: "Technology",
      width: 100,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Wind", "PV", "CSP"],
    },
    {
      field: "project_number",
      headerName: "Project number",
      type: "number",
      width: 120,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 130,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Germany", "Spain", "UK"],
    },

    {
      field: "wind_turbines",
      headerName: "Wind Turbines",
      width: 400,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
    },
    {
      field: "total_kW",
      headerName: "Total kW",
      type: "number",
      width: 130,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
    },
    {
      field: "regions",
      headerName: "Regions",
      width: 400,
      description: "This column is not sortable.",
      sortable: false,
      editable: true,
    },
    {
      field: "responsible_people",
      headerName: "Responsible people",
      width: 300,
      editable: true,
    },
    {
      field: "notes",
      renderCell: renderCellExpand,
      headerName: "Notes",
      description: "Notes are not sortable.",
      sortable: false,
      width: 200,
      editable: true,
    },
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

        //TODO: add modal before delete an element to confirm action
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

  if (!projects) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ width: "100%", height: 400 }}>
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
        rows={projects}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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

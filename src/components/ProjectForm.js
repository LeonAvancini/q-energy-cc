import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const GridStyled = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  background: #ffffff;
  border: 2px solid #fafafa;
  border-radius: 10px;
  box-shadow: 24px;
  padding: 10px;
`;

const ButtonStyled = styled(Button)`
  text-transform: none;
  margin-top: 3px;
  margin-bottom: 2px;
`;

const status = ["Acquisition", "In Developement", "Execution"];
const technologies = ["Wind", "PV", "CSP"];
const countries = ["Germany", "Spain", "UK"];
const people = [
  "Jane Doe",
  "Jacob Riccardi",
  "John Rutledge",
  "Alissa Young",
  "Wendy Gaul",
  "Laura Quan",
  "Juanita Valdez",
  "Kristopher Hall",
];

export const ProjectForm = ({ newProject, closeModal }) => {
  const [personsName, setPersonsName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonsName(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let projectData = {
      project_name: data.get("project_name"),
      project_status: data.get("project_status"),
      operating: data.get("operating") === "on" ? "true" : "false",
      technology: data.get("technology"),
      project_number: data.get("project_number"),
      country: data.get("country"),
      regions: data.get("regions"),
      wind_turbines: data.get("wind_turbines"),
      total_kW: data.get("total_kW"),
      responsible_people: data.get("responsible_people"),
      notes: data.get("notes"),
    };
    newProject(projectData);
    closeModal();
  };

  return (
    <GridStyled>
      <Typography align="center" variant="h5">
        Create a project
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={12}>
            <TextField
              name="project_name"
              required
              label="Project name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="project_status"
              required
              defaultValue=""
              label="Status"
              variant="outlined"
              select
              fullWidth
            >
              {status.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="technology"
              required
              defaultValue=""
              label="Technology"
              variant="outlined"
              select
              fullWidth
            >
              {technologies.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="project_number"
              type="number"
              required
              label="Project number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="country"
              required
              defaultValue=""
              label="Country"
              variant="outlined"
              select
              fullWidth
            >
              {countries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="regions"
              label="Regions"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="wind_turbines"
              label="Wind turbines"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="total_kW"
              label="Total kW"
              variant="outlined"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ width: 356 }}>
              <InputLabel id="responsible-people-label">
                Responsible people
              </InputLabel>
              <Select
                name="responsible_people"
                labelId="responsible-people-label"
                id="responsible-people"
                multiple
                defaultValue=""
                value={personsName}
                onChange={handleChange}
                input={<OutlinedInput label="Person name" />}
              >
                {people.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="notes"
              label="Notes"
              variant="outlined"
              fullWidth
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="operating" />}
              label="Operating"
            />
          </Grid>
          <Grid item>
            <ButtonStyled type="submit" fullWidth variant="contained">
              Add project
            </ButtonStyled>
          </Grid>
        </Grid>
      </Box>
    </GridStyled>
  );
};

export default ProjectForm;

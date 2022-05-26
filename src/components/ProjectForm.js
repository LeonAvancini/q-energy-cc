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
import { useState } from "react";

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
    <Grid
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 380,
        background: "white",
        border: "2px solid #000",
        borderRadius: 10,
        boxShadow: 24,
        padding: 10,
      }}
    >
      <Typography align="center" variant="h5">
        Project form
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container direction={"column"} spacing={0.5}>
          <Grid item>
            <TextField
              name="project_name"
              required
              label="Project name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
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
          <Grid item>
            <FormControlLabel
              control={<Checkbox name="operating" />}
              label="Operating"
            />
          </Grid>
          <Grid item></Grid>
          <Grid item>
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
          <Grid item>
            <TextField
              name="project_number"
              required
              label="Project number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
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
          <Grid item>
            <TextField
              name="regions"
              label="Regions"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              name="wind_turbines"
              label="Wind turbines"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              name="total_kW"
              label="Total kW"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="responsible-people-label">
                Responsible people
              </InputLabel>
              {/* FIXME: fix ux when are selected more than 3 persons  */}
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
          <Grid item>
            <TextField
              name="notes"
              label="Notes"
              variant="outlined"
              fullWidth
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid item>
            <Button
              style={{ textTransform: "none" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add project
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProjectForm;

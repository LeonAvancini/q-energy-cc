import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  IconButton,
  TextField,
  Checkbox,
  Box,
  Container,
  CssBaseline,
  Button,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { HOME } from "../../RouterConfig/routes";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let loginInfo = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (
      loginInfo.email === "leon@qenergy.de" &&
      loginInfo.password === "youcanican1234"
    ) {
      localStorage.setItem("loginValidation", true);
      navigate(HOME);
    } else {
      localStorage.setItem("loginValidation", false);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={"leon@qenergy.de"}
          />
          <Grid style={{ position: "relative" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              defaultValue={"youcanican1234"}
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              style={{
                position: "absolute",
                right: "0px",
                bottom: "14px",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

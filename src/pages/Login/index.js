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
import styled from "styled-components";

import { HOME } from "../../RouterConfig/routes";

const ContainerStyled = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
const BoxStyled = styled(Box)`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 1.5rem;
  borderradius: 1rem;
`;

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
    <ContainerStyled component="main" maxWidth="xs">
      <CssBaseline />
      <BoxStyled>
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
              style={{ position: "absolute", right: "0px", bottom: "14px" }}
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
      </BoxStyled>
    </ContainerStyled>
  );
};

export default Login;

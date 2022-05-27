import React, { useEffect, useState } from "react";

import { Tabs, Box, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, HOME } from "../RouterConfig/routes";

const TabsComponent = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      navigate(HOME);
    } else {
      navigate(DASHBOARD);
    }
  }, [value, navigate]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Dashboard" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabsComponent;

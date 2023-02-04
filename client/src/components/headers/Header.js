import * as React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ width: "210px" }}>
            CYCLE SYNC
          </Typography>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Typography
              variant="h6"
              component={Link}
              to={"/"}
              sx={{ mr: 2, color: "white" }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              to={"/calendar"}
              sx={{ mr: 2, color: "white" }}
            >
              Calendar
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              to={"/account"}
              sx={{ mr: 2, color: "white" }}
            >
              Account
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

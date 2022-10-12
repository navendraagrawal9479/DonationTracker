import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdjustIcon from "@mui/icons-material/Adjust";

export default function Navbar(props) {

  return (
    <AppBar position="static" sx={{ bgcolor: "#3114bb",boxShadow:'2px 2px gray' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={props.onClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="div"
          component="div"
          sx={{ flexGrow: 1, margin: 0, display: "flex", alignItems: "center" }}
        >
          <Typography variant="span" sx={{ mr: 1 }}>
            <AdjustIcon />
          </Typography>
          <Typography variant="span" sx={{ mb: 0.4, fontFamily: "Cairo" }}>
            TIOBU
          </Typography>
        </Typography>
        <Button>
          <Avatar
            alt="TIOBU"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Typography, Avatar, IconButton, Toolbar, AppBar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import DarkModeButton from "./Buttons";

const DonateNavbar = (props) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{color:'inherit',bgcolor:'inherit',boxShadow:'2px 2px 2px gray'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => {
            navigate('/all-creators');
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "inherit" }} />
        </IconButton>
        {props.display && <Typography
          variant="div"
          component="div"
          sx={{
            flexGrow: 1,
            margin: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="span" sx={{ mr: 1 }}>
            <Avatar alt={props.userName} src={props.profileUrl} />
          </Typography>
          <Typography
            variant="span"
            sx={{
              mb: 0.4,
              mr: {xs:0.5,sm:1},
              fontFamily: "Cairo",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            {props.userName}
          </Typography>
          <CheckCircleIcon sx={{ color: "#0b7eb9" }} />
        </Typography>}
        <DarkModeButton displayText = 'none' />
      </Toolbar>
    </AppBar>
  );
};

export default DonateNavbar;

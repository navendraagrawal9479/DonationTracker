import React from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../Slices/DarkModeSlice";
import { useSelector } from "react-redux";

const DarkMode = (props) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(toggleDarkMode());
      }}
      sx={{ justifySelf: "end" }}
    >
      <Stack
        sx={{ fontSize: { xs: "10px", sm: "20px" }, color: "#000" }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <Typography
          component="span"
          sx={{ display: { xs: props.displayText , sm: "block" } }}
        >
          Dark Mode
        </Typography>
        <NightsStayOutlinedIcon />
      </Stack>
    </Button>
  );
};

const LightMode = (props) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(toggleDarkMode());
      }}
    >
      <Stack
        sx={{ fontSize: { xs: "10px", sm: "20px" }, color: "#fff" }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={{ xs: 1, sm: 2 }}
      >
        <Typography
          component="span"
          sx={{ display: { xs: props.displayText, sm: "block" } }}
        >
          Light Mode
        </Typography>
        <NightsStayIcon />
      </Stack>
    </Button>
  );
};

const DarkModeButton = (props) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const display = props.displayText || 'none';
  return (
    <Box sx={{ fontSize: "10px" }}>
      {darkMode ? (
        <LightMode displayText={display} />
      ) : (
        <DarkMode displayText={display} />
      )}
    </Box>
  );
};

export default DarkModeButton;

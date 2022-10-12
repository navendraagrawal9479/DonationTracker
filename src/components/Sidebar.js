import React from "react";
import { Box, Stack } from "@mui/system";
import { Button } from "@mui/material";
import DarkModeButton from "./Buttons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box className="menu" sx={{ color: "inherit", bgcolor: "inherit" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-between" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={2}
      >
        <Button
          sx={{
            fontSize: "16px",
            bgcolor: "#3114bb",
            color: "white",
            "&:hover": { bgcolor: "cornflowerblue" },
          }}
          onClick={()=>{navigate('/all-donations')}}
        >
          See All Donations
        </Button>
        <DarkModeButton displayText="block" />
      </Stack>
    </Box>
  );
};

export default Sidebar;

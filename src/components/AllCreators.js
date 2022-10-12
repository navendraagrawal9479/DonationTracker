import React, { useState } from "react";
import { Stack, Box } from "@mui/system";
import { useSelector } from "react-redux";
import CreatorCard from "./CreatorCard";
import Navbar from "./Navbar";
import { Typography } from "@mui/material";
import Sidebar from "./Sidebar"

const AllCreators = () => {
  const { creators } = useSelector((state) => state.creator);
  const data = creators;
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <Box>
      <Navbar onClick={openMenuHandler} />
      <Stack m={2} direction="column" gap={2} justifyContent="center" alignItems='start'>
        {openMenu && <Sidebar />}
        <Typography ml={1} sx={{ fontWeight: "bold" }}>
          Recommended Creators
        </Typography>
        <Stack
          flexWrap="wrap"
          gap={2}
          direction="row"
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          {data.map((item) => {
            return (
              <CreatorCard
                key={item.id}
                id={item.id}
                name={item.userName}
                url={item.profileUrl}
                profession={item.profession}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AllCreators;

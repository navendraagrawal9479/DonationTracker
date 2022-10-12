import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import DonateNavbar from "./DonateNavbar";
import DonateForm from "./DonateForm";

const DonateCreator = () => {
  const { id } = useParams();
  const { creators } = useSelector((state) => state.creator);
  const creatorDetails = creators.find((item) => item.id === id);
  //console.log(creatorDetails);
  const { color, bgColor } = useSelector((state) => state.darkMode);

  return (
    <Box sx={{ color: { color }, bgcolor: { bgColor } }}>
      <DonateNavbar
        userName={creatorDetails.userName}
        profileUrl={creatorDetails.profileUrl}
        display={true}
      />
      <DonateForm creatorDetails={creatorDetails} />
    </Box>
  );
};

export default DonateCreator;

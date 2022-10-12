import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";

const DonationCard = ({ data, EnableDrop }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const {darkMode} = useSelector(state=>state.darkMode)
  const borderCard = darkMode && '2px solid gray'

  return (
    <Card
      sx={{
        width: "95%",
        color: "inherit",
        bgcolor: "inherit",
        margin: "10px 5px",
        // boxShadow:shadow,
        border:borderCard
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "15px",fontWeight:'bold' }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
          sx={{ minWidth: "330px" }}
        >
          <Typography sx={{ width: "23%" }}>{data.creatorId}</Typography>
          <Typography sx={{ width: "20%" }}>{data.currency}</Typography>
          <Typography sx={{ width: "20%" }}>{data.amount}</Typography>
          <Typography sx={{ width: "30%" }}>
            {data.name ? data.name : "-"}
          </Typography>
        </Stack>
        {!EnableDrop && (
          <Button
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
            sx={{ width: "100%" }}
          >
            {openMenu ? <ArrowDropUpIcon sx={{color:'cornflowerblue'}} /> : <ArrowDropDownIcon sx={{color:'cornflowerblue'}}  />}
          </Button>
        )}
        {!EnableDrop && openMenu && <Typography>Message: {data.message ? data.message : 'N/A'}</Typography>}
      </Stack>
    </Card>
  );
};

export default DonationCard;

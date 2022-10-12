import { useEffect, useState } from "react";
import React from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import LoadingSpinner from "./LoadingSpinner";
import DonationCard from "./DonationCard";
import DonateNavbar from "./DonateNavbar";

const Donations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [donations, setDonations] = useState([]);
  const [httpError, setHttpError] = useState();
  const { color, bgColor } = useSelector((state) => state.darkMode);

  useEffect(() => {
    const fetchDonations = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://creators-da28d-default-rtdb.firebaseio.com/donations.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong.");
      }
      const responseData = await response.json();

      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          creatorId: responseData[key].creatorId,
          currency: responseData[key].currency,
          amount: responseData[key].amount,
          name: responseData[key].fanName,
          message: responseData[key].message,
        });
      }

      setDonations(loadedData);
      setIsLoading(false);
    };

    fetchDonations().catch((error) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, []);
  //   console.log(donations);
  const columns = {
    creatorId: "Creator ID",
    currency: "Currency",
    amount: "Amount",
    name: "Name",
    message: "Message",
  };

  return (
    <Box
      minHeight="100vh"
      sx={{
        color: color,
        bgcolor: bgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        minWidth: "300px",
      }}
    >
      <DonateNavbar />
      <Typography sx={{ color: color, bgcolor: bgColor }} variant="div">
        {isLoading && <LoadingSpinner />}
      </Typography>
      <Typography sx={{ color: color, bgcolor: bgColor }} variant="div">
        {httpError && <p>{httpError}</p>}
      </Typography>
      <Stack direction="column-reverse">
        {donations.map((item) => {
          return <DonationCard data={item} />;
        })}
        <DonationCard data={columns} EnableDrop={true} />
      </Stack>
    </Box>
  );
};

export default Donations;

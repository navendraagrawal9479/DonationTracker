import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

const CreatorCard = (props) => {
  const [isRed, setIsRed] = useState(false);
  const { darkMode } = useSelector((state) => state.darkMode);
  const color = darkMode ? "white" : "black";
  const [selected, setSelected] = useState(false);
  let border = null;
  if(selected){
    border = '5px solid cornflowerblue'
  }
 
  return (
    <Card
      sx={{
        width: { sm: `170px`, md: "200px", xs: "150px" },
        border: "none",
        boxShadow: "none",
        color: "inherit",
        bgcolor: "inherit",
      }}
    >
      <Link
        to={`/all-creators/${props.id}`}
        onClick={() => {
          setSelected(true);
        }}
        onBlur={() => {
          setSelected(false);
        }}
      >
        <CardMedia
          image={props.url}
          alt={props.name}
          sx={{
            width: { sm: `170px`, md: "200px", xs: "150px" },
            height: { sm: `170px`, md: "200px", xs: "170px" },
            borderRadius: "5px",
            border:{border}
          }}
        />
      </Link>
      <CardContent sx={{ height: "80px", p: 0.5 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="column"
            justifyContent="flex-start"
            sx={{ mr: "auto" }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "13px", sm: "15px" } }}
            >
              {props.name}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "13px", sm: "15px" }, color: "gray" }}
            >
              {props.profession}
            </Typography>
          </Stack>
          <button
            className="like-btn"
            onClick={() => {
              setIsRed((prev) => !prev);
            }}
          >
            {!isRed ? (
              <FavoriteBorderIcon sx={{ width: "20px", color: { color } }} />
            ) : (
              <FavoriteIcon sx={{ color: "red", width: "20px" }} />
            )}
          </button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;

import React from "react";
import { Paper, Typography } from "@mui/material";
import useInput from "../hooks/use-input";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

const DonateForm = (props) => {
  const options = ["$", "₹", "€", "£", "¥"];

  const {
    value: enteredAmount,
    isValid: enteredAmountIsValid,
    hasError: enteredAmountHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: amountReset,
  } = useInput((value) => value > 0);

  const nameRef = useRef();
  const messageRef = useRef();
  const { color, bgColor } = useSelector((state) => state.darkMode);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(null);
  const [currency, setCurrency] = useState("$");

  const postDataHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://creators-da28d-default-rtdb.firebaseio.com/donations.json",
        {
          method: "POST",
          body: JSON.stringify({
            creatorId: props.creatorDetails.id,
            currency: userData.curr,
            amount: userData.amount,
            fanName: userData.fanName,
            message: userData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong.");
      }
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setHasError(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredAmountIsValid) return;

    const creatorId = props.creatorDetails.id;
    const curr = currency;
    const amount = enteredAmount;
    const fanName = nameRef.current.value;
    const message = messageRef.current.value;

    const userData = {
      creatorId,
      curr,
      amount,
      fanName,
      message,
    };
    postDataHandler(userData);

    amountReset();
  };

  if (isSubmitting) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        margin: "20px auto",
        color: "inherit",
        bgcolor: "inherit",
        minHeight: "90vh",
        width: "300px",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: "bold", textAlign: "center", margin: "0px 20px" }}
      >
        Send Your Love to {props.creatorDetails.userName} to Become a real Fan
      </Typography>
      <form onSubmit={submitHandler} className="form">
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <select
            name="currency"
            id="currency"
            value={currency}
            onChange={(event) => {
              setCurrency(event.target.value);
            }}
            style={{ color: color, backgroundColor: bgColor }}
          >
            {options.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            name="amount"
            id="amount"
            placeholder="2000"
            className="amount"
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
            style={{ color: color, backgroundColor: bgColor }}
            required
          />
        </Typography>
        {enteredAmountHasError && (
          <Typography
            sx={{ color: "red", marginRight: "auto", marginLeft: "5px" }}
          >
            Amount should not be empty.
          </Typography>
        )}
        <input
          id="name"
          name="name"
          type="text"
          label="Your name (optional)"
          placeholder="Your name (optional)"
          ref={nameRef}
          className="name-input"
          style={{ color: color, backgroundColor: bgColor }}
        />
        <textarea
          id="outlined-multiline-static"
          placeholder="Say something nice.(optional)"
          rows={4}
          maxLength={50}
          ref={messageRef}
          className="name-input"
          style={{ color: color, backgroundColor: bgColor }}
        />
        {hasError && <Typography sx={{ color: "red" }}>{hasError}</Typography>}
        <button type="submit" className="submit-btn">
          Support {`${currency} ${enteredAmount}`}
        </button>
      </form>
    </Paper>
  );
};

export default DonateForm;

import { Stack } from "@mui/material";
import React from "react";
import { BookingForm } from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const BookingPage = () => {
  return (
    <Stack pr={{ xs: "22%", md: 0 }}>
      <BookingForm availableTimes={availableTimes} />
    </Stack>
  );
};

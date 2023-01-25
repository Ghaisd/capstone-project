import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../App";
import { Homepage, BookingPage } from "../pages";

export const Main = () => {
  return (
    <Routes>
      <Route path={routes.Default} element={<Homepage />} />
      <Route path={routes.Home} element={<Homepage />} />
      <Route path={routes.Booking} element={<BookingPage />} />
    </Routes>
  );
};

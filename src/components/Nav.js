import { Box, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { routes } from "../App";

export const Nav = () => {
  return (
    <Stack
      component="nav"
      direction={{ md: "row" }}
      justifyContent="space-around"
      spacing={2}
      pb={{ xs: 2, md: 0 }}
    >
      <Box
        component="img"
        src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
        width={100}
        pl={{ xs: "37%", md: 0 }}
      />
      <Stack
        direction={{ md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        textAlign={{ xs: "center", md: "inherit" }}
        pt={3}
        sx={{
          a: {
            textDecoration: "none",
            textDecorationStyle: "none",
            color: "black",
            fontWeight: 500,
          },
        }}
      >
        <Link component={RouterLink} to={routes.Home}>
          Home
        </Link>
        <Link component={RouterLink} to={routes.Home}>
          About
        </Link>
        <Link component={RouterLink} to={routes.Home}>
          Menu
        </Link>
        <Link component={RouterLink} to={routes.Home}>
          Reservations
        </Link>
        <Link component={RouterLink} to={routes.Booking}>
          Order online
        </Link>
        <Link component={RouterLink} to={routes.Home}>
          Login
        </Link>
      </Stack>
    </Stack>
  );
};

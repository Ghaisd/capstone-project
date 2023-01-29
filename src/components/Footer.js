import { Box, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { routes } from "../App";

export const Footer = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 4, md: 0 }}
      alignItems={{ xs: "center", md: "normal" }}
      pb={{ sm: 4, md: 0 }}
      component="footer"
      justifyContent="space-evenly"
      sx={{
        a: {
          textDecoration: "none",
          textDecorationStyle: "none",
          color: "black",
          fontWeight: 500,
          alignItems: { sm: "center", md: "normal" },
        },
      }}
    >
      <Box
        component="img"
        src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
        alt="a lemon"
        width={250}
      />

      <Stack width={200}>
        <Link component={RouterLink} to={routes.Home}>
          Doormat Navigation
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Home
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          About
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Menu
        </Link>

        <Link component={RouterLink} to={routes.Booking}>
          Reservations
        </Link>

        <Link component={RouterLink} to={routes.Booking}>
          Order Online
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Login
        </Link>
      </Stack>

      <Stack width={200}>
        <Link component={RouterLink} to={routes.Home}>
          Contact
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Address
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Phone Number
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Email
        </Link>
      </Stack>

      <Stack width={200}>
        <Link component={RouterLink} to={routes.Home}>
          Social Media Links
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Address
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Phone Number
        </Link>

        <Link component={RouterLink} to={routes.Home}>
          Email
        </Link>
      </Stack>
    </Stack>
  );
};

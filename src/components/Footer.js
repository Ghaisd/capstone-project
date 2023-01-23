import { Box, Link, Stack } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 4, md: 0 }}
      alignItems={{ xs: "center", md: "normal" }}
      pb={{ sm: 4, md: 0 }}
      component="footer"
      justifyContent="space-evenly"
      mt="100vh"
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
        <Link>Doormat Navigation</Link>

        <Link>Home</Link>

        <Link>About</Link>

        <Link>Menu</Link>

        <Link>Reservations</Link>

        <Link>Order Online</Link>

        <Link>Login</Link>
      </Stack>

      <Stack width={200}>
        <Link>Contact</Link>

        <Link>Address</Link>

        <Link>Phone Number</Link>

        <Link>Email</Link>
      </Stack>

      <Stack width={200}>
        <Link>Social Media Links</Link>

        <Link>Address</Link>

        <Link>Phone Number</Link>

        <Link>Email</Link>
      </Stack>
    </Stack>
  );
};

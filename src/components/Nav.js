import { Box, Link, Stack } from "@mui/material";
import React from "react";

export const Nav = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-around"
      spacing={2}
    >
      <Box
        component="img"
        src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
        width={100}
      />
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 4 }}
        pt={2}
        sx={{
          a: {
            textDecoration: "none",
            textDecorationStyle: "none",
            color: "black",
            fontWeight: 500,
          },
        }}
      >
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Menu</Link>
        <Link>Reservations</Link>
        <Link>Order online</Link>
        <Link>Login</Link>
      </Stack>
    </Stack>
  );
};

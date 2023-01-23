import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, md: 0 }}
      justifyContent="space-evenly"
      py={12}
      bgcolor="#6e6e6e"
    >
      <Stack spacing={2}>
        <Typography
          variant="h3"
          component="h1"
          color="#F4CE14"
          justifyContent={{ xs: "center", md: "normal" }}
        >
          Little Lemon
        </Typography>
        <Typography variant="h6" color="white">
          Chicago
        </Typography>
        <Typography width={212} color="white">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#F4CE14",
            color: "white",
            borderRadius: 16,
            width: 0.7,
          }}
        >
          Reserve a table
        </Button>
      </Stack>
      <Box
        component="img"
        src="https://i.pinimg.com/736x/93/ee/18/93ee18cd5a5d4b23527529e6a016c8f5--best-logo-design-best-logos.jpg"
      />
    </Stack>
  );
};

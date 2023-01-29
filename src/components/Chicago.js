import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Chicago = () => {
  return (
    <Stack direction={{ md: "row" }} justifyContent="center" my={20}>
      <Stack width={{ md: 0.5 }}>
        <Typography variant="h3">Little Lemon</Typography>
        <Typography variant="h5">Chicago</Typography>
        <Typography width="inherit" pt={5}>
          "Nestled in the heart of Chicago's bustling River North neighborhood,
          "The Windy City Bistro" offers a unique dining experience featuring a
          blend of classic American and contemporary French cuisine. The sleek
          and modern interior, complete with exposed brick walls and dim
          lighting, sets the perfect ambiance for a romantic dinner or a night
          out with friends. The menu features an array of mouth-watering dishes,
          including their signature steak frites and truffle mac and cheese. The
          extensive wine list, curated by our expert sommelier, pairs perfectly
          with any dish. Don't miss out on their famous Sunday brunch, featuring
          bottomless mimosas and live jazz music. "
        </Typography>
      </Stack>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1639623562912-2e4a977881db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hjaWFnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        width={{ md: 0.3 }}
        height={400}
      />
    </Stack>
  );
};

import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const Chicago = () => {
  return (
    <Stack direction="row" justifyContent="center" my={20}>
      <Stack width={0.5}>
        <Typography variant="h3">Little Lemon</Typography>
        <Typography variant="h5">Chicago</Typography>
        <Typography width="inherit" pt={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          nobis dicta asperiores similique repudiandae in nulla laboriosam
          accusamus iste ducimus cupiditate omnis fuga sunt ipsa, delectus
          soluta mollitia laudantium ratione non nihil velit molestiae. Numquam
          laudantium at pariatur nostrum dolorum.
        </Typography>
      </Stack>
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1487788270274-b0a7d600569f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWNhZ298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        width={400}
        height={400}
      />
    </Stack>
  );
};

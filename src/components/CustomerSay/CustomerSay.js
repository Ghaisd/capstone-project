import { Stack, Typography } from "@mui/material";
import React from "react";
import { Testimonial } from "./Testimonial";

const img1 =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
const img2 =
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
const img3 =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";

export const CustomerSay = () => {
  return (
    <>
      <Typography variant="h4" textAlign="center" py={6}>
        Testimonials
      </Typography>
      <Stack direction={{ md: "row" }} spacing={4} justifyContent="center">
        <Testimonial
          imgSrc={img1}
          name="Lucas Ione"
          testimony="Tried the raw vegan pizza today and LOVED it!!!! Soooo delicious!!"
        />
        <Testimonial
          imgSrc={img2}
          name="Shelton Meade"
          testimony="Fantastic snacks! The prepared foods are delicious!"
        />
        <Testimonial
          imgSrc={img3}
          name="Nik Sigmund"
          testimony="Thanks for making the ONLY snack that’s totally pure and tastes great too!"
        />
      </Stack>
    </>
  );
};

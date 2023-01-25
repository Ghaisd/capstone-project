import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { SpeicalCard } from "./SpeicalCard";

export const Specials = () => {
  return (
    <Box p={4}>
      <Stack direction="row" justifyContent="space-around">
        <Typography variant="h4">This weeks specials!</Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#F4CE14",
            color: "black",
            borderRadius: 8,
            width: 0.1,
            textTransform: "none",
          }}
        >
          Order Menu
        </Button>
      </Stack>
      <Stack direction="row" spacing={6} justifyContent="center" pt={10}>
        <SpeicalCard
          imgSrc="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          dishName="Greek salad"
          dishPrice="12.99"
          dishDesription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <SpeicalCard
          imgSrc="https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          dishName="Bruchetta "
          dishPrice="5.99"
          dishDesription="Our Bruschetta is made from grilled bread that has been smeared with garlic  "
        />
        <SpeicalCard
          imgSrc="https://images.unsplash.com/photo-1488474339733-16a5dd4ba5e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TGVtb24lMjBEZXNzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          dishName="Lemon Dessert"
          dishPrice="5.00"
          dishDesription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </Stack>
    </Box>
  );
};

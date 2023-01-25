import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";

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
      <Stack direction="row" spacing={4} justifyContent="center">
        <Card sx={{ width: 300, height: 300 }}>
          <Typography variant="h4" mt={5}>
            Rating1
          </Typography>
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src={img1}
              sx={{ width: 100, height: 100 }}
            />
            <Typography ml={2} mt={5} variant="h4">
              Name1
            </Typography>
          </Stack>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            quibusdam aspernatur.
          </Typography>
        </Card>
        <Card sx={{ width: 300, height: 300 }}>
          <Typography variant="h4" mt={5}>
            Rating2
          </Typography>
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src={img2}
              sx={{ width: 100, height: 100 }}
            />
            <Typography ml={2} mt={5} variant="h4">
              Name2
            </Typography>
          </Stack>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            quibusdam aspernatur.
          </Typography>
        </Card>

        <Card sx={{ width: 300, height: 300 }}>
          <Typography variant="h4" mt={5}>
            Rating3
          </Typography>
          <Stack direction="row">
            <Avatar
              alt="Remy Sharp"
              src={img3}
              sx={{ width: 100, height: 100 }}
            />
            <Typography ml={2} mt={5} variant="h4">
              Name3
            </Typography>
          </Stack>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            quibusdam aspernatur.
          </Typography>
        </Card>
      </Stack>
    </>
  );
};

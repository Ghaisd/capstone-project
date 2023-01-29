import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { times } from "lodash";

export const Testimonial = ({ imgSrc, name, testimony }) => {
  return (
    <Card sx={{ width: 400, height: 300 }}>
      <Stack direction="row" spacing={1} variant="h4" my={3}>
        {times(5, (index) => (
          <StarIcon key={index} />
        ))}
      </Stack>
      <Stack direction="row">
        <Avatar
          alt="Sophy Avril"
          src={imgSrc}
          sx={{ width: 100, height: 100 }}
        />
        <Typography ml={2} my={5} variant="h4">
          {name}
        </Typography>
      </Stack>
      <Typography textAlign="center">{testimony}</Typography>
    </Card>
  );
};

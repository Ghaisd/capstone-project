import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export const SpeicalCard = ({
  imgSrc,
  dishName,
  dishPrice,
  dishDesription,
}) => {
  return (
    <Card sx={{ width: 300, height: 500, position: "relative" }}>
      <CardMedia sx={{ height: 240 }} image={imgSrc} />
      <CardContent>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>{dishName}</Typography>
          <Typography color="#F4CE14">${dishPrice}</Typography>
        </Stack>
        <Typography>{dishDesription}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "black",
            fontWeight: 600,
            position: "absolute",
            bottom: 0,
            mb: 2,
          }}
        >
          Order a delivery <DeliveryDiningIcon sx={{ pl: 2 }} />
        </Button>
      </CardActions>
    </Card>
  );
};

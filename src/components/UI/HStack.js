import { Stack } from "@mui/material";
import React from "react";

export const HStack = (children, restProps) => {
  return (
    <Stack direction="row" {...restProps}>
      {children}
    </Stack>
  );
};

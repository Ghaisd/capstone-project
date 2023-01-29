import {
  Box,
  Button,
  FormGroup,
  Input,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

const occasionOptions = ["Birthday", "Anniversary"];

export const BookingForm = ({ availableTimes }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [nrOfGuests, setNrOfGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const disabled = useMemo(
    () => !(!!date && !!time && !!nrOfGuests && !!occasion),
    [date, time, nrOfGuests, occasion]
  );
  const onSubmit = (e) => {
    console.log("submit");
    console.log("typeof", typeof date);
    console.log("typeof", typeof time);
    console.log("typeof", typeof nrOfGuests);
    console.log("typeof", typeof occasion);
    e.preventDefault();
    setDate("");
    setTime("");
    setNrOfGuests(0);
    setOccasion("");
    console.log([{ date }, { time: time }, { nrOfGuests }, { occasion }]);
  };

  useEffect(() => {}, [date]);

  return (
    <>
      <Typography variant="h4" textAlign="center">
        Book Now
      </Typography>

      <Box display="flex" justifyContent="center" my={5} mb={29}>
        <FormGroup
          sx={{
            width: 0.1,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            pl: 2,
          }}
        >
          <Stack>
            <Typography variant="subtitle2">Choose date</Typography>
            <Input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Stack>

          <Stack>
            <Typography variant="subtitle2">Choose time</Typography>
            <Select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              sx={{ height: 40 }}
            >
              {availableTimes.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Stack>

          <Stack>
            <Typography variant="subtitle2">Number of guests</Typography>
            <Input
              type="number"
              placeholder="1"
              value={nrOfGuests}
              min="0"
              max="10"
              id="guests"
              onChange={(e) => setNrOfGuests(e.target.value)}
              InputProps={{
                inputProps: { min: 0 },
              }}
            />
          </Stack>

          <Stack>
            <Typography variant="subtitle2">Occasion</Typography>
            <Select
              defaultValue=""
              onChange={(e) => setOccasion(e.target.value)}
              sx={{ height: 40 }}
            >
              {occasionOptions.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            onClick={onSubmit}
            disabled={disabled}
          >
            Make Your reservation
          </Button>
        </FormGroup>
      </Box>
    </>
  );
};

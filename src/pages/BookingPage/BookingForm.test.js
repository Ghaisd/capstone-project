import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

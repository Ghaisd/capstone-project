import { Nav, Footer, Main } from "./components";

export const routes = {
  Default: "/",
  Home: "/Homepage",
  Booking: "/booking",
};

export const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

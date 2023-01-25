import React from "react";
import { Chicago, CustomerSay, Specials } from "../components";
import { Header } from "../components/Header";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Specials />
      <CustomerSay />
      <Chicago />
    </>
  );
};

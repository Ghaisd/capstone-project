import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "100vh",
      }}
    >
      <img
        src="https://www.48hourslogo.com/oss/attachments/2022/01/13/347418572/fce5b08add13e667d5855320c8ab6b39.png"
        alt="a lemon"
        width={250}
      />

      <ul style={{ listStyleType: "none", textDecoration: "none" }}>
        <li>
          <a href="#">Doormat Navigation</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>

      <ul style={{ listStyleType: "none", textDecoration: "none" }}>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Adress</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
      <ul style={{ listStyleType: "none", textDecoration: "none" }}>
        <li>
          <a href="#">Social Media Links</a>
        </li>
        <li>
          <a href="#">Adress</a>
        </li>
        <li>
          <a href="#">Phone Number</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
    </footer>
  );
};

import React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
          listStyleType: "none",
          textDecoration: "none",
          gap: 16,
          paddingRight: 72,
        }}
      >
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
    </nav>
  );
};

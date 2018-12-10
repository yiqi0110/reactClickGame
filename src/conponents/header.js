import React from "react";
import "../assets/styles/header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header className="header">
      <h1>Halo</h1>
    </header>
  );
}

export default Header;

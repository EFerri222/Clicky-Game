import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header className="header">
      <h1>Clickolas Cage!</h1>
      <h2>Click on a Cage to earn points, but don't click on any more than once!</h2>
    </header>
  );
}

export default Header;

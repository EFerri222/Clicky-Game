import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clickolas Cage!</a>
        </li>
        <li className="">
          Click a Cage to begin!
        </li>
        <li>
          Score: 0 | Top Score: 0
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

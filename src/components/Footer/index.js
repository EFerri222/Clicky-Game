import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header className="header">
      <footer class="footer">
        <div class="bottom">
          Clickolas Cage!
          <img alt="cage" src="https://cdn.discordapp.com/attachments/546522527451578392/564244205480837120/niccage.png"/>
        </div>
      </footer>
    </header>
  );
}

export default Header;

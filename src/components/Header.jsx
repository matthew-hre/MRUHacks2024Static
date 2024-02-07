import "../App.css";
import { useEffect, useState } from "react";

import IconTest from "../assets/icon-test.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // when the user clicks on a link in the menu
  // the menu should close

  useEffect(() => {
    const menuItems = document.querySelectorAll(".Header ul li a");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        setShowMenu(false);
      });
    });
  }, []);

  return (
    <div className={showMenu ? "dropdown-header Header" : "Header"}>
      <div>
        <img src={IconTest} className="logo" alt="mruhacks icon" />
        <ul className={showMenu ? "dropdown-menu first-menu" : "first-menu"}>
          <li>
            <a href="#joining-in">Joining In</a>
          </li>
          {/* <li>
            <a href="#hackathon-prizes">Hackathon Winners</a>
          </li>
          <li>
            <a href="#workshops">Workshops</a>
          </li> */}
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
      <ul className={showMenu ? "dropdown-menu" : ""}>
        {/* <li>
          <a href="#about-us">About Us</a>
        </li>
        <li className="no-border">
          <a className="discord-link" href="#join-our-discord">
            Join our Discord
          </a>
        </li> */}
        <li className="no-border">
          <img
            className="dropdown-toggle"
            onClick={toggleMenu}
            src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png"
            alt="placeholder"
          />
        </li>
      </ul>
    </div>
  );
}

export default Header;

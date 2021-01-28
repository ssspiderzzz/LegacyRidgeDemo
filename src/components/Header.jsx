import React from "react";
import Logo from "../assets/Legacy-Ridge-Logo-1.png";
import "./Header.scss";

const Header = (props) => {
  const headerMenuStyle =
    props.userOffset === 0
      ? {
          header: { backgroundColor: "transparent" },
        }
      : {};

  return (
    <header className="header" style={headerMenuStyle.header}>
      <div className="logoContainer">
        <a href="#Home">
          <img src={Logo} alt="logo1" />
        </a>
      </div>
      <div className="navContainer">
        <ul className="nav">
          <li key="HOM">
            <span href="#Home">HOME</span>
          </li>
          <li key="WEL">
            <span href="#Welcome">WELCOME</span>
          </li>
          <li key="LIF">
            <span href="#Lifestyle">LIFESTYLE</span>
          </li>
          <li key="GAL">
            <span href="#Gallary">GALLARY</span>
          </li>
          <li key="REG">
            <span href="#Register">REGISTER</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

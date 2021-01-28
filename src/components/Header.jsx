import React from "react";
import Logo from "../assets/Legacy-Ridge-Logo-1.png";
import "./Header.scss";

const Header = (props) => {
  const headerMenuStyle =
    props.userOffset === 0
      ? {
          header: { backgroundColor: "transparent" },
          logo: { opacity: 0 },
        }
      : {};

  const navItems = ["Home", "Welcome", "Lifestyle", "Gallary", "Register"];

  return (
    <header
      className="header fixed w-full flex flex-wrap items-center justify-between navbar-expand-lg bg-navbar"
      style={headerMenuStyle.header}
    >
      <div className="logoContainer">
        <a href="#Home">
          <img src={Logo} alt="logo1" style={headerMenuStyle.logo} />
        </a>
      </div>
      <div className="navContainer">
        <ul className="nav">
          {navItems.map((navItem) => {
            return (
              <li key={`#${navItem}`}>
                <span href={`#${navItem}`}>{navItem}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

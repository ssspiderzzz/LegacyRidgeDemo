import React from "react";
import Logo from "../assets/Legacy-Ridge-Logo-1.png";

const Nav = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menu = ["Home", "Welcome", "Lifestyle", "Gallary", "Register"];
  return (
    <>
      <div
        className={`fixed z-20 top-0 left-0 right-0 flex py-4 px-4 md:px-6 justify-center items-center ${
          props.userOffset > 0 ? "bg-navbar" : "bg-transparent"
        } transition duration-300`}
      >
        <div className="container flex md:px-5">
          <img src={Logo} alt="logo" className="h-12 mr-20 object-contain" />
          <div className="hidden lg:flex">
            {menu.map((item) => (
              <button
                type="button"
                className={`mx-1 px-2 py-1 uppercase text-xs text-white custom-underline`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex-1 lg:hidden" />
          <button
            type="button"
            className="mr-0 px-2 lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className={"lg:hidden flex-grow items-center" + (navbarOpen ? "" : " hidden")}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {menu.map((item) => {
              return (
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="ml-2">{item}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

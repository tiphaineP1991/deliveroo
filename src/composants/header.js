import React from "react";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header-bloc">
      <img className="logo" alt="logo" src={Logo}></img>
    </div>
  );
};

export default Header;

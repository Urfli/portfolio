import React from "react";
import "./Header.css";
import ButtonGroup from "./components/ButtonGroup";
import ME from "../../assets/me.png";
import HeaderSocials from "./components/HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Norbert Urbán</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <ButtonGroup />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

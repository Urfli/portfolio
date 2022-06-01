import React, { useState } from "react";
import "./Navbar.css";
import NavbarIcon from "./components/NavbarIcon";
import ICON_SETTINGS from "./components/IconSettings";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#header");
  return (
    <nav>
      {ICON_SETTINGS.map((e) => {
        return (
          <NavbarIcon
            hrefTag={e.hrefName}
            active={activeNavbar}
            setActive={setActiveNavbar}
            icon={e.iconName}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;

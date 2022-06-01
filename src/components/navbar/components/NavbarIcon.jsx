import React from "react";
import "./NavbarIcon.css";

const NavbarIcon = ({ icon, active, setActive, hrefTag }) => {
  return (
    <a
      href={hrefTag}
      onClick={() => setActive(hrefTag)}
      className={active === hrefTag ? "active" : ""}
    >
      {icon}
    </a>
  );
};

export default NavbarIcon;

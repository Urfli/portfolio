import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const CARD_DESCRIPTION = [
  {
    icon: <FaAward className="about__icon" />,
    title: "Experience",
    body: "1+ Years Working",
  },
  {
    icon: <FiUsers className="about__icon" />,
    title: "Clients",
    body: "Lorem ipsum dolor sit..",
  },
  {
    icon: <VscFolderLibrary className="about__icon" />,
    title: "Projects",
    body: "10+ Completed",
  },
];

export default CARD_DESCRIPTION;

import React from "react";
import "./AboutCard.css";

const AboutCard = ({ icon, title, description }) => {
  return (
    <article className="about__card">
      {icon}
      {title}
      {description}
    </article>
  );
};

export default AboutCard;

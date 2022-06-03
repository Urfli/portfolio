import React from "react";
import ME from "../../../../assets/me-about.jpg";
import "./AboutMeImg.css";

const AboutMeImg = () => {
  return (
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About_Image"></img>
      </div>
    </div>
  );
};

export default AboutMeImg;

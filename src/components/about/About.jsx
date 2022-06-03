import React from "react";
import "./About.css";
import AboutMeImg from "./components/AboutMeImg/AboutMeImg";
import AboutCard from "./components/AboutCard/AboutCard";
import CARD_DESCRIPTION from "./components/CardsDescription/data";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <AboutMeImg />

        <div className="about__content">
          <div className="about__cards">
            {CARD_DESCRIPTION.map((e) => {
              return (
                <AboutCard
                  icon={e.icon}
                  title={<h5>{e.title}</h5>}
                  description={<small>{e.body}</small>}
                />
              );
            })}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            perspiciatis natus suscipit, ut unde nulla sunt consequuntur nostrum
            nihil quod amet voluptatibus numquam distinctio, dolor deleniti
            deserunt illo facilis est?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

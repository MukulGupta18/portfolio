import React from "react";
import skills from "./data/skills.json";
import TiltCard from "./TiltCard";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Power-up kit</h2>
      <p className="section-kicker">Collect these along the route</p>
      <div className="skill-board">
        {skills.map((data, index) => (
          <TiltCard className={`skill-token t${index % 4}`} key={data.title}>
            {data.title}
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;

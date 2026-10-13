import React from "react";
import TiltCard from "./TiltCard";

const schools = [
  {
    pin: "02",
    title: "Master of Computer Applications",
    school: "Galgotias University, India",
    href: "https://www.galgotiasuniversity.edu.in",
    years: "2022 — 2024",
    tone: "pink",
  },
  {
    pin: "03",
    title: "Bachelor of Software Development",
    school: "Guru Gobind Singh Indraprastha University, India",
    href: "http://www.ipu.ac.in/",
    years: "2018 — 2021",
    tone: "sky",
    },
  ];

  const Education = () => {
    return (
      <section className="section" id="education">
        <h2 className="section-title">School stops</h2>
        <p className="section-kicker">Campuses on the map</p>
        <div className="edu-row">
          {schools.map((item) => (
            <TiltCard key={item.pin} className={`edu-card ${item.tone}`}>
            <span className="pin">{item.pin}</span>
            <h3>{item.title}</h3>
            <p>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.school}
              </a>
            </p>
            <p className="years">{item.years}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Education;

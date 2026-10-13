import React from "react";
import experience from "./data/experience.json";
import TiltCard from "./TiltCard";

const tones = ["lime", "orange", "violet"];

const Experience = () => {
  const route = [...experience].reverse();

  return (
    <section className="section" id="experience">
      <h2 className="section-title">Career road</h2>
      <p className="section-kicker">Drive from the first role to the latest stop</p>
      <div className="road">
        <div className="road-line" />
        {route.map((data, index) => (
          <article
            className={`road-stop ${index % 2 === 0 ? "left" : "right"}`}
            key={data.id}
          >
            <div className="milestone">
              <span>{String(index + 4).padStart(2, "0")}</span>
            </div>
            <TiltCard className={`stop-card ${tones[index % tones.length]}`}>
              <p className="ex-org">{data.organisation}</p>
              <h2>{data.role}</h2>
              <p className="ex-meta">
                {data.startDate} — {data.endDate} · {data.location}
              </p>
              {data.highlights?.length > 0 && (
                <ul>
                  {data.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </TiltCard>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import project from "./data/projects.json";
import TiltCard from "./TiltCard";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section-title">Project cities</h2>
      <p className="section-kicker">Landmarks I built on the map</p>
      <div className="project-grid">
        {project.map((data) => (
          <TiltCard className="project-card" key={data.id}>
            <img src={data.imageSrc} alt={data.title} />
            <div className="body">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <div className="card-actions">
                <a href={data.demo} className="demo" target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
                <a href={data.source} className="code" target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;

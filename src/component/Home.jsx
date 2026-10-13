import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import TiltCard from "./TiltCard";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full stack developer",
        "Software engineer · MetaDesign Solutions",
        "Follow the bright road through my work",
      ],
      typeSpeed: 40,
      backSpeed: 24,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-copy">
        <p className="eyebrow">You are here · Pin 01</p>
        <h1>
          Mukul
          <span> Gupta</span>
        </h1>
        <p className="typed-line">
          <span ref={typedRef} />
        </p>
        <p className="lead">
          A colorful 3D career map: school stops, job checkpoints, skill power-ups,
          and project cities.
        </p>
        <div className="home-actions">
          <a href={pdf} download="Resume.pdf" className="btn-primary-cta">
            Grab resume
          </a>
          <a href="#experience" className="btn-ghost">
            Start the route
          </a>
        </div>
      </div>
      <TiltCard className="hero-stage">
        <div className="hero-3d">
          <img src={`/assets/${hero.imgSrc}`} alt="Mukul Gupta" />
          <div className="badge-3d">START</div>
        </div>
      </TiltCard>
    </section>
  );
};

export default Home;

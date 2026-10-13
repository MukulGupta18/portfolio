import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import TiltCard from "./TiltCard";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Finish line</h2>
      <p className="section-kicker">Say hello — next destination TBD</p>
      <TiltCard className="finish-board">
        <div className="contact-icon">
          <a
            href="https://www.instagram.com/muku_18/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100017067750434"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
            aria-label="Facebook"
          >
            <CiFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/mukul-gupta-08b802180/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/MukulGupta18"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a href="mailto:mgofficial20@gmail.com" className="items" aria-label="Email">
            <SiGmail />
          </a>
        </div>
      </TiltCard>
    </section>
  );
};

export default Contact;

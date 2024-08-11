import React, { useEffect, useRef } from 'react';

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store the ref value in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className="education" ref={sectionRef}>
      <div className="education-container">
        <h2>Education</h2>
        <div className="degree">
          <h3>Master of Computer Applications</h3>
          <p>
            <a href="https://www.galgotiasuniversity.edu.in" target="_blank" rel="noopener noreferrer"> Galgotias University, India</a>
          </p>
          <p>2022 - 2024</p>
        </div>
        <div className="degree">
          <h3>Bachelor of Software Development</h3>
          <p>
            <a href="http://www.ipu.ac.in/" target="_blank" rel="noopener noreferrer"> Guru Gobind Singh Indraprastha University, India</a>
          </p>
          <p>2018 - 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;

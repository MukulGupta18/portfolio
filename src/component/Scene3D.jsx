import React from "react";

const cubes = [
  { className: "cube c1", delay: "0s" },
  { className: "cube c2", delay: "-2s" },
  { className: "cube c3", delay: "-4s" },
  { className: "cube c4", delay: "-1.5s" },
  { className: "cube c5", delay: "-3.2s" },
];

const Cube = ({ className, delay }) => (
  <div className={className} style={{ animationDelay: delay }}>
    <div className="face front" />
    <div className="face back" />
    <div className="face right" />
    <div className="face left" />
    <div className="face top" />
    <div className="face bottom" />
  </div>
);

const Scene3D = () => {
  return (
    <div className="scene-3d" aria-hidden="true">
      {cubes.map((cube) => (
        <Cube key={cube.className} {...cube} />
      ))}
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
    </div>
  );
};

export default Scene3D;

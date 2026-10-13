import React, { useRef } from "react";

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    const rotateX = (0.5 - y) * 18;
    const rotateY = (x - 0.5) * 22;
    node.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(28px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;

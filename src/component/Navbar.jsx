import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav_bar">
      <a href="#home" className="brand" onClick={close}>
        MG <span>MAP</span>
      </a>
      <button
        className="nav_toggle"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>
      <div className={`nav_links ${open ? "open" : ""}`}>
        <a href="#home" className="nav_items" onClick={close}>
          Start
        </a>
        <a href="#education" className="nav_items" onClick={close}>
          Schools
        </a>
        <a href="#experience" className="nav_items" onClick={close}>
          Route
        </a>
        <a href="#skills" className="nav_items" onClick={close}>
          Kit
        </a>
        <a href="#projects" className="nav_items" onClick={close}>
          Cities
        </a>
        <a href="#contact" className="nav_items" onClick={close}>
          Finish
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

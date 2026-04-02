// Navbar.jsx
import { useState } from "react";
import { navLinks, personalInfo } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" aria-label="Home">
          <span className="gradient-text">&lt;</span>
          {personalInfo.name}
          <span className="gradient-text">/&gt;</span>
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
          <span className={isOpen ? "open" : ""}></span>
        </button>
      </div>
    </nav>
  );
}

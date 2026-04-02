// Hero.jsx
import { personalInfo } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-shapes" />

      <div className="hero-content">
        <p className="hero-greeting hero-animate">Hello, I'm</p>

        <h1 className="hero-name hero-animate">
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <h2 className="hero-role hero-animate">{personalInfo.role}</h2>

        <p className="hero-tagline hero-animate">{personalInfo.tagline}</p>

        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">
            Get to Know Me
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>

      <div className="scroll-indicator scroll-animate">
        <a href="#about" aria-label="Scroll down to About section">
          <div className="mouse scroll-bounce">
            <div className="wheel"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

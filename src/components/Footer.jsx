// Footer.jsx
import { personalInfo } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Designed & Built by <span className="gradient-text">Varshini j</span>
        </p>
        <div className="footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              className="footer-icon invert"
              loading="lazy"
            />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt=""
              className="footer-icon"
              loading="lazy"
            />
          </a>
        </div>
        <p className="footer-copy">© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}

// Publications.jsx
import { motion } from "framer-motion";
import { publications } from "../data";

export default function Publications() {
  return (
    <section id="publications" className="publications-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="section-subtitle">Research & Analysis</p>
          <h2 className="section-title">Publications</h2>
        </motion.div>

        <div className="publications-grid">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="pub-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="pub-title">{pub.title}</h3>
              <span className="pub-type">{pub.type}</span>

              <p className="pub-abstract">{pub.abstract}</p>

              <div className="pub-footer">
                <div className="pub-links">
                  {pub.links.github && (
                    <a
                      href={pub.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="GitHub Repo"
                      aria-label={`View ${pub.title} on GitHub`}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt=""
                        className="pub-icon invert"
                        loading="lazy"
                      />
                    </a>
                  )}
                  {pub.links.demo && (
                    <a
                      href={pub.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="Live Demo"
                      aria-label={`View ${pub.title} Demo`}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
                        alt=""
                        className="pub-icon"
                        loading="lazy"
                      />
                    </a>
                  )}
                  {pub.links.journal && (
                    <a
                      href={pub.links.journal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="View Published Journal"
                      aria-label={`View ${pub.title} on Journal`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pub-icon"
                      >
                        <path
                          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                          stroke="#4ADE80"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                  {pub.links.linkedin && (
                    <a
                      href={pub.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="View on LinkedIn"
                      aria-label={`View ${pub.title} on LinkedIn`}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        alt=""
                        className="pub-icon"
                        loading="lazy"
                      />
                    </a>
                  )}
                </div>

                <span
                  className={`pub-status status-${pub.status.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {pub.status}
                </span>
              </div>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

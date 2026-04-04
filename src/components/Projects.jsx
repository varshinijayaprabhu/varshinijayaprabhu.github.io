// Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">What I've Built</p>
        <h2 className="section-title">My Projects</h2>
      </motion.div>

      <div className="timeline-container">
        <motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="timeline-node"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: 15 }}
            >
              <div className="node-icon-wrapper">
                <img
                  src={project.icon}
                  alt=""
                  className="node-icon-3d"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              className="timeline-content"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(145, 94, 255, 0.2)",
              }}
            >
              <span className="project-number">0{index + 1}</span>
              <h3 className="project-title">{project.title}</h3>
              {project.category && (
                <span
                  className="project-category"
                  style={{
                    display: "block",
                    fontSize: "0.9rem",
                    color: "#915eff",
                    marginBottom: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.category}
                </span>
              )}

              {Array.isArray(project.description) ? (
                <ul
                  className="project-description-list"
                  style={{
                    paddingLeft: "1.2rem",
                    marginBottom: "1.5rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.description.map((point, i) => (
                    <li
                      key={i}
                      style={{ marginBottom: "0.5rem", lineHeight: "1.6" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="project-description">{project.description}</p>
              )}

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View Code"
                    aria-label={`View ${project.title} Code on GitHub`}
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt=""
                      style={{
                        width: "28px",
                        height: "28px",
                        filter: "invert(1)",
                      }}
                      loading="lazy"
                    />
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View Demo"
                    aria-label={`View ${project.title} Live Demo`}
                  >
                    <img
                      src={
                        project.demo.includes("streamlit.app")
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"
                          : project.demo.includes("onrender.com")
                            ? "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg"
                            : project.demo.includes("hf.space")
                              ? "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                              : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
                      }
                      alt=""
                      style={{
                        width: "28px",
                        height: "28px",
                        filter: project.demo.includes("onrender.com")
                          ? "invert(1)"
                          : "none",
                      }}
                      loading="lazy"
                    />
                  </a>
                )}
                {project.status === "Ongoing" && (
                  <>
                    <div
                      className="project-link"
                      title="Ongoing Project"
                      style={{
                        cursor: "default",
                        background: "rgba(255, 165, 0, 0.15)",
                        borderColor: "rgba(255, 165, 0, 0.3)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffa500"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#ffa500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Work in Progress
                    </span>
                  </>
                )}
                {project.status === "Hackathon" && (
                  <>
                    <div
                      className="project-link"
                      title="Hackathon Project"
                      style={{
                        cursor: "default",
                        background: "rgba(255, 215, 0, 0.15)",
                        borderColor: "rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffd700"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 21h8m-4-9v9m0-9a5 5 0 0 1-5-5V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a5 5 0 0 1-5 5Z" />
                        <line x1="4" y1="9" x2="20" y2="9" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#ffd700",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Hackathon Project
                    </span>
                  </>
                )}
                {project.status === "College" && (
                  <>
                    <div
                      className="project-link"
                      title="College Project"
                      style={{
                        cursor: "default",
                        background: "rgba(30, 144, 255, 0.15)",
                        borderColor: "rgba(30, 144, 255, 0.3)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1e90ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#1e90ff",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      College Level Project
                    </span>
                  </>
                )}
                {project.status === "Internship" && (
                  <div
                    className="project-link"
                    title="Internship Project"
                    style={{
                      cursor: "default",
                      background: "rgba(50, 205, 50, 0.15)",
                      borderColor: "rgba(50, 205, 50, 0.3)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#32cd32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

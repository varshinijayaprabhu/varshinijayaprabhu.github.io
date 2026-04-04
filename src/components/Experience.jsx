// Experience.jsx
import { motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">My Professional Journey</p>
        <h2 className="section-title">Experience</h2>
      </motion.div>

      <div className="timeline-container">
        <motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
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
                <span style={{ fontSize: "1.5rem" }}>{exp.icon}</span>
              </div>
            </motion.div>

            <motion.div
              className="timeline-content"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(145, 94, 255, 0.2)",
              }}
            >
              <h3 className="project-title">{exp.role}</h3>
              <span className="project-category">{exp.company}</span>

              <p
                className="project-description"
                style={{ textAlign: "justify" }}
              >
                {exp.description}
              </p>

              <div className="exp-meta">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">My Academic Background</p>
        <h2 className="section-title">Education</h2>
      </motion.div>

      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="edu-image-container">
              <img src={edu.image} alt={edu.institution} className="edu-image" />
            </div>
            <div className="edu-content">
              {edu.duration && (
                <div className="edu-header" style={{ justifyContent: "flex-end" }}>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              )}
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <div className="edu-footer">
                <span className="edu-grade">{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

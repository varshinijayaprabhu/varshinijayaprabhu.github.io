import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { education, degrees } from "../data";

export default function Education() {
  const [selectedDegree, setSelectedDegree] = useState(null);

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

      {/* Degrees Section */}
      <motion.div
        className="degrees-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="degrees-title">Degrees</h3>
        <div className="degrees-grid">
          {degrees.map((deg, index) => (
            <motion.div
              key={index}
              className="degree-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div
                className="degree-img-wrap"
                onClick={() => setSelectedDegree(deg)}
              >
                <img
                  src={deg.image}
                  alt={deg.degree}
                  className="degree-img"
                />
                <div className="degree-overlay">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>View Degree Certificate</span>
                </div>
              </div>
              <div className="degree-info">
                <div className="degree-header-row">
                  <h4 className="degree-name">{deg.degree}</h4>
                  <span className="degree-badge">CGPA: {deg.cgpa}</span>
                </div>
                <p className="degree-title-full">{deg.title}</p>
                <p className="degree-college">🏛️ {deg.institution}</p>
                <p className="degree-univ">🎓 {deg.university}</p>
                <span className="degree-duration">🗓️ {deg.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Degree Lightbox */}
      <AnimatePresence>
        {selectedDegree && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDegree(null)}
          >
            <motion.div
              className="cert-lightbox-inner"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-lightbox-close"
                onClick={() => setSelectedDegree(null)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <img
                src={selectedDegree.image}
                alt={selectedDegree.degree}
                className="cert-lightbox-img"
              />
              <p className="cert-lightbox-caption">
                <strong style={{ color: "#915eff" }}>{selectedDegree.degree}</strong> — {selectedDegree.institution} ({selectedDegree.university})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


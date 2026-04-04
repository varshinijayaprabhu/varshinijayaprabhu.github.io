import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { certifications } from "../data";

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.25 } }),
};

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightbox, setLightbox] = useState(false);
  const cert = certifications[index];

  const navigate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">Achievements & Recognition</p>
        <h2 className="section-title">Certifications</h2>
      </motion.div>

      <div className="cert-slider-wrap">
        <button className="cert-arrow" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <div className="cert-slide-viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={index} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="cert-slide-card">
              <div className="cert-accent" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              {/* Image */}
              <div className="cert-slide-img-wrap" onClick={() => setLightbox(true)} style={{ borderColor: `${cert.color}33` }}>
                <img src={cert.image} alt={cert.title} className="cert-slide-img" />
                <div className="cert-image-overlay">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>View Full</span>
                </div>
              </div>

              {/* Info section */}
              <div className="cert-info">
                <p className="cert-info-title" style={{ color: cert.color }}>{cert.title}</p>
                <p className="cert-info-issuer">{cert.issuer}</p>
                <p className="cert-info-date">{cert.date}</p>
                <p className="cert-info-desc">{cert.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="cert-arrow" onClick={() => navigate(1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="cert-dots">
        {certifications.map((_, i) => (
          <button key={i} className={`cert-dot${i === index ? " cert-dot-active" : ""}`}
            style={i === index ? { background: cert.color } : {}}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="cert-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(false)}>
            <motion.div className="cert-lightbox-inner" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 22 }} onClick={(e) => e.stopPropagation()}>
              <button className="cert-lightbox-close" onClick={() => setLightbox(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <img src={cert.image} alt={cert.title} className="cert-lightbox-img" />
              <p className="cert-lightbox-caption"><strong style={{ color: cert.color }}>{cert.issuer}</strong> — {cert.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

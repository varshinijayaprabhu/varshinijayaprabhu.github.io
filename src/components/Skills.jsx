// Skills.jsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">What I Know</p>
        <h2 className="section-title">Skills & Technologies</h2>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(145, 94, 255, 0.2)",
              borderColor: "rgba(145, 94, 255, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="skill-icon-wrapper">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-logo"
                loading="lazy"
              />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-category">{skill.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

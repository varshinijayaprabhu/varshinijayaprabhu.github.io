// InteractiveBackground.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeChars = [
  "0",
  "1",
  "0",
  "1",
  "0",
  "1",
  "{",
  "}",
  "<",
  ">",
  "/",
  ";",
  "=>",
  "( )",
  "[]",
  "&&",
  "||",
  "if",
  "for",
  "let",
  "const",
  "</>",
  "npm",
  "git",
  "AI",
];

const INTERACTIVE_SELECTORS = [
  ".btn",
  ".btn-primary",
  ".btn-outline",
  ".nav-links",
  ".navbar",
  ".image-frame",
  ".profile-image",
  ".skill-card",
  ".project-card",
  ".contact-form",
  "input",
  "textarea",
  "button",
  "a",
  ".section-header",
];

function isOverInteractiveElement(x, y) {
  const element = document.elementFromPoint(x, y);
  if (!element) return false;

  return INTERACTIVE_SELECTORS.some(
    (selector) => element.closest(selector) !== null,
  );
}

function CodeParticle({ x, y, id, char, onComplete }) {
  const randomX = (Math.random() - 0.5) * 100;
  const randomRotate = (Math.random() - 0.5) * 90;

  return (
    <motion.div
      initial={{ x, y, scale: 1, opacity: 0.9, rotate: 0 }}
      animate={{
        scale: 0.3,
        opacity: 0,
        y: y - 80 - Math.random() * 50,
        x: x + randomX,
        rotate: randomRotate,
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      onAnimationComplete={() => onComplete(id)}
      style={{
        position: "fixed",
        fontFamily: "'Fira Code', 'Consolas', monospace",
        fontSize: `${14 + Math.random() * 8}px`,
        fontWeight: 600,
        color: `hsl(${200 + Math.random() * 80}, 70%, 65%)`,
        textShadow: "0 0 10px currentColor, 0 0 20px currentColor",
        pointerEvents: "none",
        zIndex: 9999,
        whiteSpace: "nowrap",
      }}
    >
      {char}
    </motion.div>
  );
}

function MatrixRain() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const numCols = Math.floor(window.innerWidth / 60);
    const cols = Array.from({ length: numCols }, (_, i) => ({
      id: i,
      x: i * 60 + 30,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
    }));
    setColumns(cols);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {columns.map((col) => (
        <motion.div
          key={col.id}
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: window.innerHeight + 200,
            opacity: [0, 0.25, 0.25, 0],
          }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: col.x,
            fontFamily: "'Fira Code', monospace",
            fontSize: "12px",
            color: "#915eff",
            textShadow: "0 0 5px #915eff",
            pointerEvents: "none",
            writingMode: "vertical-rl",
            letterSpacing: "0.4em",
            userSelect: "none",
          }}
        >
          {Array.from({ length: 12 }, () =>
            Math.random() > 0.5 ? "1" : "0",
          ).join("")}
        </motion.div>
      ))}
    </div>
  );
}

function CursorGlow({ mousePos }) {
  return (
    <motion.div
      animate={{
        x: mousePos.x - 100,
        y: mousePos.y - 100,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 150 }}
      style={{
        position: "fixed",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(145, 94, 255, 0.2) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [particleId, setParticleId] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch or heavy load

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return; // Disable interactive effects on mobile

      setMousePos({ x: e.clientX, y: e.clientY });

      // Don't spawn particles near interactive elements
      if (isOverInteractiveElement(e.clientX, e.clientY)) {
        return;
      }

      // Reduced spawn rate
      if (Math.random() > 0.9) {
        const randomChar =
          codeChars[Math.floor(Math.random() * codeChars.length)];
        setParticles((prev) => [
          ...prev,
          {
            id: particleId,
            x: e.clientX,
            y: e.clientY,
            char: randomChar,
          },
        ]);
        setParticleId((prev) => prev + 1);
      }
    },
    [particleId, isMobile],
  );

  const removeParticle = useCallback((id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isMobile]);

  useEffect(() => {
    if (particles.length > 20) {
      setParticles((prev) => prev.slice(-20));
    }
  }, [particles]);

  // Don't render heavy background effects on mobile
  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg-primary)",
          zIndex: -1,
        }}
      />
    );
  }

  return (
    <>
      <MatrixRain />
      <CursorGlow mousePos={mousePos} />
      <AnimatePresence>
        {particles.map((particle) => (
          <CodeParticle
            key={particle.id}
            id={particle.id}
            x={particle.x}
            y={particle.y}
            char={particle.char}
            onComplete={removeParticle}
          />
        ))}
      </AnimatePresence>
    </>
  );
}

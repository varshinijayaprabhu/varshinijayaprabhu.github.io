// App.jsx
import { Suspense, lazy } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load background and below-the-fold components
const InteractiveBackground = lazy(
  () => import("./components/InteractiveBackground"),
);
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Publications = lazy(() => import("./components/Publications"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <InteractiveBackground />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ height: "50vh" }} />}>
          <About />
          <Skills />
          <Projects />
          <Publications />
          <Education />
          <Experience />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

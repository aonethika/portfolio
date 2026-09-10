"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const title = ["FULL—STACK", "DEVELOPER"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const reverseRotate = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section id="home" ref={ref} className="hero section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="orbit orbit-one" style={{ rotate: orbitRotate }} aria-hidden="true"><span className="orb orb-coral" /><span className="orb orb-cream" /></motion.div>
      <motion.div className="orbit orbit-two" style={{ rotate: reverseRotate }} aria-hidden="true"><span className="orb orb-blue" /></motion.div>
      <div className="hero-kicker mono">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>PORTFOLIO / 2026</motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>KOCHI, INDIA ↗</motion.span>
      </div>
      <motion.div className="hero-title-wrap" style={{ y: titleY, scale: titleScale, opacity }}>
        <h1>
          {title.map((line, lineIndex) => (
            <span className="title-line" key={line}>
              {line.split("").map((char, index) => (
                <motion.span key={`${char}-${index}`} initial={{ y: "120%", rotate: index % 2 ? 5 : -5 }} animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.12 + lineIndex * 0.15 + index * 0.025, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
                  {char === " " ? "\u00a0" : char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
      </motion.div>
      <div className="hero-bottom">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
          I turn complex product ideas into reliable, expressive web experiences — from polished interfaces to production APIs and cloud deployments.
        </motion.p>
        <motion.a href="#work" className="round-link" data-cursor="VIEW" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 110 }} whileHover={{ rotate: 12, scale: 1.08 }}>
          <span>Explore work</span><b>↘</b>
        </motion.a>
      </div>
    </section>
  );
}

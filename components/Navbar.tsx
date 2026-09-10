"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30 });
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <motion.header
        initial={{ y: -80 }} animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="site-header"
      >
        <a className="wordmark" href="#home" aria-label="Avanthika P S, home">APS<span>®</span></a>
        <nav aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} data-cursor="GO"><span>{label}</span></a>)}
        </nav>
        <a className="availability" href="#contact" data-cursor="HI"><i /> Available for work</a>
      </motion.header>
    </>
  );
}

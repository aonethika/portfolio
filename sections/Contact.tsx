"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

function MagneticLink({ href, children }: { href: string; children: ReactNode }) {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 }); const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.2); y.set((event.clientY - rect.top - rect.height / 2) * 0.2);
  };
  return <motion.a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ x: sx, y: sy }} data-cursor="GO">{children}</motion.a>;
}

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-orbit" aria-hidden="true"><span /></div>
      <div className="section-shell contact-inner">
        <div className="section-tag mono">04 / LET’S CONNECT</div>
        <motion.h2 initial={{ y: 90, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>Have an idea?<br /><em>Let’s make it real.</em></motion.h2>
        <MagneticLink href="mailto:psavanthika03@gmail.com">psavanthika03@gmail.com <span>↗</span></MagneticLink>
        <div className="footer-row mono"><span>© 2026 AVANTHIKA P S</span><div><MagneticLink href="https://www.linkedin.com/in/avanthika-ps">LINKEDIN ↗</MagneticLink><MagneticLink href="https://github.com/aonethika">GITHUB ↗</MagneticLink><MagneticLink href="/Avanthika-PS-Resume.pdf">RÉSUMÉ ↗</MagneticLink></div><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  );
}

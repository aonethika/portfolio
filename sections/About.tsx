"use client";

import { motion } from "framer-motion";

const experience = [
  { period: "MAY 2025 — NOW", role: "Junior Full Stack Developer", company: "Finquo Versity · Calicut", body: "Shipping production fixes and features for Fyn Life, a live social platform for traders and investors. Built admin analytics, technical SEO tooling and a rich-text publishing workflow.", stat: "150+", statLabel: "fixes & improvements shipped" },
  { period: "AUG 2025 — JAN 2026", role: "MERN Stack Developer Intern", company: "Futura Labs · Kochi", body: "Built reusable React and Redux Toolkit interfaces, connected REST APIs through Axios, and delivered resilient loading and error states for real product flows.", stat: "MERN", statLabel: "production-focused foundation" },
];

export default function About() {
  return (
    <section id="about" className="about section-shell">
      <div className="section-tag mono">01 / PROFILE</div>
      <motion.h2 className="manifesto" initial={{ opacity: 0.15 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.7 }}>
        I build for the moment when <em>“it works”</em> becomes <em>“it feels right.”</em>
      </motion.h2>
      <div className="profile-grid">
        <div className="profile-aside mono">
          <span>BASED IN</span><strong>Kakkanad, Kochi</strong><span>EDUCATION</span><strong>B.Tech · Computer Engineering<br />KTU, 2021—2025</strong>
        </div>
        <div className="profile-copy">
          <p>Full-stack developer with hands-on experience on a live social platform and production-deployed personal products. I work across Next.js, TypeScript, MERN and AWS, with a sharp eye for the small details that make software stable, fast and intuitive.</p>
          <a href="/Avanthika-PS-Resume.pdf" target="_blank" className="text-link" data-cursor="OPEN">Download résumé <span>↗</span></a>
        </div>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <motion.article key={item.role} className="experience-row" initial={{ opacity: 0, y: 70, rotateX: -12 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ amount: 0.35 }} transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mono experience-period">{item.period}</div>
            <div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="experience-body">{item.body}</p></div>
            <div className="experience-stat"><strong>{item.stat}</strong><span className="mono">{item.statLabel}</span></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

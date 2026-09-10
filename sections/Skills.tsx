"use client";

import { motion } from "framer-motion";

const skillRows = [
  ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
  ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "AWS EC2", "AWS RDS", "Git"],
];
const disciplines = [
  ["01", "Frontend engineering", "Responsive systems, motion, state and accessible product interfaces."],
  ["02", "Backend architecture", "Clean REST APIs, authentication, data modelling and dependable integrations."],
  ["03", "Cloud delivery", "Production deployments on AWS EC2 and managed PostgreSQL with AWS RDS."],
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-shell">
        <div className="section-tag mono">03 / CAPABILITIES</div>
        <div className="skills-intro"><h2>One developer.<br /><em>Every layer.</em></h2><p>From the first interface state to the final deployment, I keep the product experience coherent across the whole stack.</p></div>
      </div>
      <div className="marquee-stack" aria-label="Technical skills">
        {skillRows.map((row, rowIndex) => (
          <div className={`marquee-row row-${rowIndex}`} key={rowIndex}><div className="marquee-content">{[...row, ...row].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<b>✦</b></span>)}</div></div>
        ))}
      </div>
      <div className="discipline-list section-shell">
        {disciplines.map(([number, title, copy], index) => (
          <motion.article key={title} initial={{ opacity: 0, x: index % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            <span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

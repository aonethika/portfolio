"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
];

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full bg-white/5 border border-gray-800 text-sm hover:bg-white/10 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}
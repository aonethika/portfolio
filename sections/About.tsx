"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-center mt-8 leading-relaxed"
      >
        I am a full-stack developer focused on building scalable and real-world applications.
        I specialize in Next.js, TypeScript, and the MERN stack.
        <br /><br />
        Recently, I built a Hospital Management System with role-based access for admins,
        doctors, and patients — handling appointment scheduling and hospital workflows.
        <br /><br />
        I care about clean architecture, performance, and user experience.
      </motion.p>

    </section>
  );
}
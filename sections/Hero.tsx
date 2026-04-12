"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          I build scalable web apps that feel premium
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 text-lg"
        >
          Full-stack developer specializing in Next.js, TypeScript, and MERN.
          Built a complete Hospital Management System with role-based workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4 justify-center"
        >

          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="https://github.com/aonethika"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

        </motion.div>

      </div>
    </section>
  );
}
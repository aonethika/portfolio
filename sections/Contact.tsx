"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-6"
      >
        Have a project or opportunity? Let’s connect.
      </motion.p>

      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

        <a
          href="mailto:psavanthika03@gmail.com"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          Email Me
        </a>

        <a
          href="https://github.com/aonethika"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/avanthika-ps"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}
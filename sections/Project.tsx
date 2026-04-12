"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Hospital Management System",
    desc: "Role-based hospital system with appointments, doctor scheduling, and admin dashboard.",
    slug: "hms",
  },
  {
    title: "FinTrackr",
    desc: "Finance tracking dashboard with analytics and expense management.",
    slug: "fintrackr",
  },
  {
    title: "ShopNow",
    desc: "E-commerce UI with product API integration and cart system.",
    slug: "shopnow",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="
              group relative p-6 rounded-2xl 
              border border-gray-800 bg-white/5 
              hover:bg-white/10 
              hover:scale-[1.05] 
              transition-all duration-300
              cursor-pointer
            "
          >

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-white/10 to-transparent blur-xl" />

            
            <div className="relative z-10">

              <h3 className="text-xl font-semibold group-hover:text-white transition">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition">
                {p.desc}
              </p>

             
              <p className="text-xs text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition">
                Click to explore full details →
              </p>

              <Link
                href={`/projects/${p.slug}`}
                className="inline-block mt-4 text-sm text-white font-medium"
              >
                Open Project →
              </Link>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
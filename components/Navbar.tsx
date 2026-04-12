"use client";

import { motion } from "framer-motion";

const navItems = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-lg">Avanthika.dev</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
}
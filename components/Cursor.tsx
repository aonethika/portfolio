"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 45 });
  const springY = useSpring(y, { stiffness: 700, damping: 45 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        x.set(event.clientX);
        y.set(event.clientY);
        const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
        setLabel(target?.dataset.cursor ?? "");
        setVisible(true);
      });
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, width: label ? 72 : 12, height: label ? 72 : 12 }}
    >
      {label && <span>{label}</span>}
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";

export function CaseProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28 });
  return <motion.div className="case-progress" style={{ scaleX }} />;
}

export function CaseAtmosphere() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 320]);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 90);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 90);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="case-atmosphere" aria-hidden="true">
      <motion.span className="case-glow" style={{ x, y }} />
      <motion.span className="case-ring" style={{ rotate }} />
    </div>
  );
}

export function AnimatedCaseTitle({ title }: { title: string }) {
  return (
    <h1 aria-label={title}>
      {title.split(" ").map((word, index) => (
        <span className="case-word" key={`${word}-${index}`}>
          <motion.span
            initial={{ y: "115%", rotate: 3 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ delay: 0.08 + index * 0.09, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function TiltImage({ source, title, index }: { source: string; title: string; index: number }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 22 });

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
    rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 110, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.18 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="case-image"
        onMouseMove={move}
        onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
        style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1200 }}
        data-cursor="MOVE"
      >
        <Image src={source} alt={`${title} screen ${index + 1}`} width={1920} height={1080} priority={index === 0} />
        <span className="case-image-shine" />
        <b className="mono">0{index + 1}</b>
      </motion.div>
      <figcaption className="mono">SCREEN / {String(index + 1).padStart(2, "0")} — MOVE TO TILT</figcaption>
    </motion.figure>
  );
}

export function InteractiveGallery({ images, title }: { images: readonly string[]; title: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="case-gallery section-shell">
      <motion.div className="gallery-watermark mono" style={{ y: backgroundY }}>SELECTED SCREENS · SELECTED SCREENS ·</motion.div>
      {images.map((source, index) => <TiltImage key={source} source={source} title={title} index={index} />)}
    </section>
  );
}

export function InteractiveFeatures({ features }: { features: readonly string[] }) {
  return (
    <ol>
      {features.map((feature, index) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 12 }}
        >
          <span className="mono">{String(index + 1).padStart(2, "0")}</span><p>{feature}</p><b>↗</b>
        </motion.li>
      ))}
    </ol>
  );
}

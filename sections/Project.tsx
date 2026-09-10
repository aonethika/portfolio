"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { number: "01", title: "Digital Clinic", category: "FULL-STACK · AWS", description: "Role-based clinic operations, scheduling, pharmacy inventory, billing and revenue intelligence.", image: "/adminDash.png", slug: "hms", tone: "coral" },
  { number: "02", title: "FinTrackr", category: "PRODUCT · FINTECH", description: "A unified home for personal spending, analytics, shared expenses and settlements.", image: "/finDash.png", slug: "fintrackr", tone: "lime" },
  { number: "03", title: "Olive Dental", category: "WEB APP · HEALTH", description: "A calm, responsive appointment experience and clinic-management interface.", image: "/oliveDentalHome.png", slug: "dentalClinic", tone: "sky" },
  { number: "04", title: "Brew Beans", category: "INTERFACE · MOTION", description: "A warm, animated storefront that makes browsing the coffee menu feel tactile.", image: "/brew-bean-home.png", slug: "coffeeshop", tone: "amber" },
  { number: "05", title: "ShopNow", category: "ECOMMERCE · API", description: "Product discovery, filtering and a responsive cart flow powered by live APIs.", image: "/shopNowDash.png", slug: "shopnow", tone: "rose" },
  { number: "06", title: "Cake Lounge", category: "UI DESIGN · NEXT.JS", description: "An elegant, chocolate-toned cake catalogue built as a modular storefront.", image: "/cakeLoungeHome.png", slug: "cakelounge", tone: "violet" },
];

export default function Projects() {
  const target = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-76%"]);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 720]);
  return (
    <section id="work" ref={target} className="project-scroll">
      <div className="project-sticky">
        <div className="project-heading section-shell">
          <div className="section-tag mono">02 / SELECTED WORK</div>
          <div className="project-heading-row"><h2>Built to be used.</h2><motion.div className="spin-mark" style={{ rotate: spin }} aria-hidden="true">✳</motion.div><p className="mono">SCROLL TO EXPLORE<br />YOUR SCROLL REWINDS →</p></div>
        </div>
        <motion.div className="project-track" style={{ x }}>
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={`project-card ${project.tone}`} data-cursor="VIEW">
              <div className="project-card-top mono"><span>{project.number}</span><span>{project.category}</span><span>↗</span></div>
              <div className="project-image-wrap">
                <Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 700px) 82vw, 58vw" className="project-image" />
                <span className="project-glare" />
              </div>
              <div className="project-card-bottom"><h3>{project.title}</h3><p>{project.description}</p></div>
            </Link>
          ))}
        </motion.div>
        <div className="track-progress section-shell"><motion.span style={{ scaleX: scrollYProgress }} /></div>
      </div>
    </section>
  );
}

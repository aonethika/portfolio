import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import {
  AnimatedCaseTitle,
  CaseAtmosphere,
  CaseProgress,
  InteractiveFeatures,
  InteractiveGallery,
} from "@/components/CaseStudyMotion";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();

  const theme = {
    "--case-accent": project.theme.accent,
    "--case-surface": project.theme.surface,
  } as CSSProperties;

  return (
    <SmoothScroll>
      <Cursor />
      <CaseProgress />
      <main className="case-study" style={theme}>
        <CaseAtmosphere />
        <header className="case-nav">
          <Link href="/#work">APS<span>®</span></Link>
          <span className="mono">CASE / {slug.toUpperCase()}</span>
          <Link href="/#work" className="mono">← ALL PROJECTS</Link>
        </header>

        <section className="case-hero section-shell">
          <div className="section-tag mono">CASE STUDY / {slug.toUpperCase()}</div>
          <div className="case-title-row">
            <AnimatedCaseTitle title={project.title} />
            <span className="case-star" aria-hidden="true">✳</span>
          </div>
          <div className="case-summary">
            <p>{project.desc}</p>
            <a href={project.live} target="_blank" rel="noreferrer" data-cursor="LIVE">View live project <span>↗</span></a>
          </div>
        </section>

        <InteractiveGallery images={project.images} title={project.title} />

        <section className="case-features section-shell">
          <div className="section-tag mono">WHAT IT DOES</div>
          <div className="feature-grid">
            <h2>Made for<br /><em>real workflows.</em></h2>
            <InteractiveFeatures features={project.features} />
          </div>
        </section>

        <footer className="case-footer section-shell">
          <Link href="/#work" data-cursor="NEXT">Explore another project <span>↗</span></Link>
        </footer>
      </main>
    </SmoothScroll>
  );
}

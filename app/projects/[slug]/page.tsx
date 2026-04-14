import Image from "next/image";
import { projects } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];
  

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-white bg-gradient-to-br ${project.theme.bg}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {project.title}
        </h1>

        <p className="text-gray-300 mt-4 max-w-2xl text-lg">
          {project.desc}
        </p>

        <div className="mt-6 space-y-4">

          <a
            href={project.live}
            target="_blank"
            className="inline-block px-6 py-3 rounded-lg bg-white text-black font-medium hover:scale-105 transition"
          >
            Live Demo →
          </a>

          {"credentials" in project && project.credentials && (
            <div className="mt-4 p-4 rounded-lg border border-gray-700 bg-white/5 text-sm text-gray-300 space-y-1">
              <p className="font-semibold text-white">Demo Login</p>
              <p>Email: {project.credentials.email}</p>
              <p>Password: {project.credentials.password}</p>
            </div>
          )}

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          Screenshots
        </h2>

        <div className="space-y-10">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <Image
                src={img}
                alt={`project-${i}`}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain bg-black"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">
          Key Features
        </h2>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
          {project.features.map((f) => (
            <li
              key={f}
              className="p-4 rounded-lg border border-gray-800 bg-white/5"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
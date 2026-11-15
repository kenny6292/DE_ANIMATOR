"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Portfolio() {
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => active === "All" ? projects : projects.filter(project => project.category === active),
    [active]
  );

  return (
    <main className="section min-h-screen">
      <div className="container">
        <p className="eyebrow mb-5">Selected projects</p>
        <h1 className="section-heading max-w-3xl">A collection of<br /><span className="gradient-text">creative experiments.</span></h1>
        <p className="muted mt-6 max-w-xl leading-7">A growing collection of animation, CGI and visual storytelling. Concept and personal studies are labelled transparently.</p>
        <div className="my-10 flex flex-wrap gap-2">
          {categories.map(category => (
            <button type="button" onClick={() => setActive(category)} key={category}
              aria-pressed={active === category}
              className={`rounded-full border px-4 py-2 text-xs transition ${active === category ? "border-violet-300 bg-violet-300 text-black" : "border-white/15 text-zinc-400 hover:border-violet-300"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visible.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
      </div>
    </main>
  );
}
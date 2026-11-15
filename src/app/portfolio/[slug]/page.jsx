import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="section">
      <div className="container">
        <Link href="/portfolio" className="mb-9 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft size={15} /> Back to portfolio</Link>
        <p className="eyebrow mb-4">{project.category} · {project.year}</p>
        <h1 className="section-heading max-w-4xl">{project.title}</h1>
        <p className="muted mt-5 max-w-2xl leading-7">{project.description}</p>
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
          <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
        </div>
        <div className="mt-10 grid gap-8 border-b border-white/10 pb-10 md:grid-cols-3">
          <div><p className="eyebrow">Project type</p><p className="mt-2">{project.type}</p></div>
          <div><p className="eyebrow">Year</p><p className="mt-2">{project.year}</p></div>
          <div><p className="eyebrow">Tools</p><p className="mt-2">{project.tools.join(" · ")}</p></div>
        </div>
        <p className="muted mt-8 max-w-3xl leading-8">This project entry is an editable portfolio example. Replace the concept description, preview image and production details with your final approved project materials before publishing.</p>
        <Link href="/contact" className="btn btn-primary mt-8">Discuss a similar project <ArrowUpRight size={15} /></Link>
      </div>
    </main>
  );
}
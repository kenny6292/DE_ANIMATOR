import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card group block">
      <div className="relative overflow-hidden">
        <Image src={project.image} alt={project.title} width={1200} height={800} className="project-image" unoptimized />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="mt-1 text-xs text-zinc-500">{project.type} · {project.year}</p>
        </div>
        <span className="text-xl text-violet-300 transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </Link>
  );
}
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play, Sparkles, Box, Clapperboard, WandSparkles } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const services = [
  ["3D & CGI", "Cinematic 3D visuals, CGI scenes, modelling and rendering.", Box],
  ["2D Animation", "Character-led storytelling, explainer videos and expressive motion.", Clapperboard],
  ["Motion Design", "Brand animation, animated typography and visual identities.", WandSparkles]
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[690px] items-center overflow-hidden border-b border-white/5">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="container relative grid items-center gap-12 py-24 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow mb-7 flex items-center gap-2"><Sparkles size={14} /> Independent animation & visual studio</p>
            <h1 className="max-w-3xl text-6xl font-black leading-[.94] tracking-[-.075em] sm:text-7xl lg:text-[88px]">
              IMAGINATION,<br /><span className="gradient-text">BROUGHT TO LIFE.</span>
            </h1>
            <p className="muted mt-8 max-w-xl text-base leading-8">Creating extraordinary digital experiences through 2D animation, 3D artistry, CGI and visual storytelling.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-primary">Explore my work <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="btn btn-outline">Start a project</Link>
            </div>
            <div className="mt-16 flex items-center gap-3 text-xs tracking-wide text-zinc-500"><span className="h-px w-10 bg-violet-400" /> SCROLL TO EXPLORE <ArrowDown size={13} /></div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="glow relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#30214f] via-[#161527] to-[#0a0a10]">
              <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 50% 38%,#9b72ff66,transparent 35%),radial-gradient(circle at 70% 70%,#00c2ff33,transparent 35%)" }} />
              <div className="absolute left-[17%] top-[17%] h-[66%] w-[66%] rotate-[-12deg] rounded-[44%_56%_55%_45%] border border-violet-200/40 bg-gradient-to-br from-violet-300/40 via-fuchsia-500/10 to-cyan-300/20 shadow-[inset_-25px_-20px_60px_#0008,0_0_90px_#9b72ff55]" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div><p className="eyebrow">Creative direction</p><p className="mt-2 text-2xl font-bold tracking-tight">Beyond the ordinary.</p></div>
                <span className="rounded-full border border-white/20 p-3"><Play size={16} /></span>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[.25em] text-zinc-600">A digital canvas for imagination</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow mb-4">Selected work</p><h2 className="section-heading">A little glimpse<br />of what I create.</h2></div>
            <Link href="/portfolio" className="btn btn-outline w-fit">View all projects <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>
      <section className="section border-y border-white/5 bg-[#0d0d14]">
        <div className="container">
          <p className="eyebrow mb-4">Creative capabilities</p>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-heading max-w-2xl">From first sketch<br />to final frame.</h2>
            <p className="muted max-w-sm leading-7">Visual craft, thoughtful storytelling and technical execution come together to make ideas impossible to ignore.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(([title, desc, Icon], index) => (
              <div className="service-card" key={title}>
                <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300"><Icon size={21} /></div>
                <p className="eyebrow">0{index + 1} / Capability</p><h3 className="mt-3 text-2xl font-bold">{title}</h3><p className="muted mt-3 text-sm leading-7">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn btn-outline mt-8">Explore all services <ArrowUpRight size={15} /></Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="rounded-[28px] border border-violet-300/20 bg-[radial-gradient(ellipse_at_top_right,#5b3b9c44,transparent_55%),#11111a] px-7 py-16 text-center md:px-16">
            <p className="eyebrow mb-5">Have an idea in mind?</p>
            <h2 className="section-heading mx-auto max-w-3xl">Let’s make something<br /><span className="gradient-text">unforgettable.</span></h2>
            <p className="muted mx-auto mt-5 max-w-lg leading-7">Have a project, collaboration or creative challenge? Tell me what you’re imagining.</p>
            <Link href="/contact" className="btn btn-primary mt-8">Let’s talk <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
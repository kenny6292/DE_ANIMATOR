import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tools = ["Blender", "Cinema 4D", "Autodesk Maya", "After Effects", "Photoshop", "Premiere Pro", "ZBrush", "Unreal Engine"];

export default function About() {
  return (
    <main className="section min-h-screen">
      <div className="container grid gap-14 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="eyebrow mb-5">Behind the frames</p>
          <h1 className="section-heading">A creative mind<br /><span className="gradient-text">for visual worlds.</span></h1>
          <p className="muted mt-7 max-w-xl text-base leading-8">DE_ANIMATOR is a creative identity focused on bringing ideas to life through animation, CGI and digital visual storytelling. The goal is simple: create memorable visuals with strong craft, intention and personality.</p>
          <p className="muted mt-5 max-w-xl leading-8">From character-driven work to product visuals and motion design, every project starts with understanding the story and finding the strongest way to express it.</p>
          <Link href="/contact" className="btn btn-primary mt-8">Work together <ArrowUpRight size={15} /></Link>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#11111a] p-8">
          <p className="eyebrow">Creative toolkit</p><h2 className="mt-3 text-3xl font-bold">Tools of the craft.</h2>
          <p className="muted mt-3 text-sm leading-7">The software and tools section is editable to reflect the applications used on each project.</p>
          <div className="mt-8 flex flex-wrap gap-2">{tools.map(tool => <span key={tool} className="rounded-full border border-white/10 bg-white/[.03] px-4 py-3 text-sm text-zinc-300">{tool}</span>)}</div>
          <div className="mt-12 border-t border-white/10 pt-7">
            <p className="eyebrow">Approach</p>
            <ol className="mt-5 space-y-4 text-sm text-zinc-300">
              {["Discover the idea", "Shape the visual direction", "Create and refine", "Deliver the final work"].map((item, index) => <li key={item} className="flex gap-4"><span className="text-violet-300">0{index + 1}</span>{item}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
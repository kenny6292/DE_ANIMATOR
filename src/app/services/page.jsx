import Link from "next/link";
import { ArrowUpRight, Box, Clapperboard, Layers, Video, Shapes, Gamepad2 } from "lucide-react";

const items = [
  ["2D Animation", "Character animation, cartoon storytelling, explainers and educational visuals.", Clapperboard],
  ["3D Animation", "3D modelling, character animation, environments and product visualization.", Box],
  ["CGI Production", "Commercial CGI, photorealistic rendering, visual effects and cinematic scenes.", Video],
  ["Motion Graphics", "Logo animation, animated typography, brand motion and social content.", Layers],
  ["Character & VTuber", "Digital character design, VTuber assets, avatars and expressive animation.", Shapes],
  ["Game & Environment", "Game-ready character concepts, animation and immersive environment visuals.", Gamepad2]
];

export default function Services() {
  return (
    <main className="section min-h-screen">
      <div className="container">
        <p className="eyebrow mb-5">What I do</p>
        <h1 className="section-heading max-w-3xl">Creative services<br /><span className="gradient-text">built to move you.</span></h1>
        <p className="muted mt-6 max-w-2xl leading-7">A range of visual production services designed to help brands, creators and teams communicate with impact.</p>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, description, Icon], index) => (
            <article className="service-card" key={title}>
              <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300"><Icon size={22} /></div>
              <p className="eyebrow">0{index + 1}</p><h2 className="mt-3 text-2xl font-bold">{title}</h2>
              <p className="muted mt-3 min-h-20 text-sm leading-7">{description}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">Request this service <ArrowUpRight size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
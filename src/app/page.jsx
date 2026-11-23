"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Box, Clapperboard, WandSparkles, Workflow, Layers3, Film } from "lucide-react";
import { projects } from "@/data/projects";
import { showreels } from "@/data/showreels";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";

const services = [
  ["3D & CGI", "Cinematic 3D visuals, CGI scenes, modelling, lighting, texturing and rendering.", Box],
  ["2D Animation", "Character-led storytelling, explainer videos, story sequences and expressive motion.", Clapperboard],
  ["AI Animation", "AI-assisted visual concepts, animated scenes and creative short-form content.", Sparkles],
  ["Motion Design", "Brand animation, kinetic typography, animated identities and campaign visuals.", WandSparkles],
  ["Product Visualisation", "Premium product scenes, feature callouts and commercial-style animation.", Layers3],
  ["Website Animation", "Motion-led website visuals, animated interfaces and interactive brand moments.", Workflow],
  ["Character & Worlds", "Character concepts, stylised assets and immersive visual environments.", Film],
  ["Creative Production", "From visual development and storyboarding through animation and final delivery.", Workflow]
];

const process = [
  ["01", "Discover", "We clarify the brief, audience, creative direction and final deliverables."],
  ["02", "Develop", "We shape the visual concept, references, storyboard and production plan."],
  ["03", "Create", "The animation is built, refined and reviewed with attention to timing and detail."],
  ["04", "Deliver", "Final exports are prepared for the platforms and formats your project needs."]
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = [
    { title: "Illustrated Motion", category: "2D ANIMATION", description: "Expressive illustration, character design and story-led visual movement.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85", alt: "Colourful abstract digital illustration" },
    { title: "Character Worlds", category: "3D ANIMATION", description: "Stylised characters and immersive worlds built with depth and personality.", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1400&q=85", alt: "Digital character-inspired artwork" },
    { title: "CGI Product Visuals", category: "CGI", description: "Premium product imagery with cinematic lighting and refined materials.", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85", alt: "Abstract CGI artwork with vivid lighting" },
    { title: "Digital Dreamscape", category: "3D & CGI", description: "Surreal digital environments, atmospheric lighting and visual storytelling.", image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1400&q=85", alt: "Surreal colourful digital artwork" },
    { title: "Motion Identity", category: "2D & MOTION DESIGN", description: "Bold graphic forms and animated identity concepts for modern brands.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85", alt: "Retro digital graphic artwork" },
    { title: "World Building", category: "3D ENVIRONMENTS", description: "Atmospheric spaces shaped through composition, scale and colour.", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85", alt: "Dreamlike atmospheric environment" },
    { title: "Product in Motion", category: "3D PRODUCT CGI", description: "Clean, high-impact product presentation for campaigns and launches.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85&sat=-25", alt: "Abstract 3D product-style visual" },
    { title: "Neon Forms", category: "CGI & VISUAL EFFECTS", description: "Experimental forms, luminous materials and cinematic visual effects.", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85&sat=35", alt: "Luminous CGI-style abstract forms" }
  ];
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 4200);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);
  const goToSlide = (index) => setActiveSlide((index + heroSlides.length) % heroSlides.length);

  return (
    <main>
      <section className="relative flex min-h-[720px] items-center overflow-hidden border-b border-white/5">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/[.08] blur-[110px]" />
        <div className="container relative grid items-center gap-12 py-24 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="glow relative aspect-[4/5] max-h-[610px] overflow-hidden rounded-[28px] border border-white/10 bg-[#11111a]">
              {heroSlides.map((slide, index) => (
                <div key={slide.title} aria-hidden={activeSlide !== index} className={"absolute inset-0 transition-all duration-1000 ease-in-out " + (activeSlide === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0")}>
                  <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/15" />
                  <div className="absolute bottom-9 left-8 right-8">
                    <p className="eyebrow">{slide.category} <span className="text-white/40">/ 0{index + 1}</span></p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{slide.title}</h2>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">{slide.description}</p>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => goToSlide(activeSlide - 1)} aria-label="Previous image" className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-3 py-2 text-xl text-white backdrop-blur hover:bg-black/75">‹</button>
              <button type="button" onClick={() => goToSlide(activeSlide + 1)} aria-label="Next image" className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-3 py-2 text-xl text-white backdrop-blur hover:bg-black/75">›</button>
              <div className="absolute right-7 top-7 z-10 flex gap-2" aria-label="Choose image">
                {heroSlides.map((slide, index) => (
                  <button key={slide.title} type="button" onClick={() => goToSlide(index)} aria-label={"Show image " + (index + 1) + ": " + slide.title} aria-current={activeSlide === index ? "true" : undefined} className={"h-2 rounded-full transition-all " + (activeSlide === index ? "w-7 bg-white" : "w-2 bg-white/55 hover:bg-white")} />
                ))}
              </div>
              <div className="absolute bottom-4 right-7 z-10 text-[10px] tracking-[.2em] text-white/75">{String(activeSlide + 1).padStart(2, "0")} / 08</div>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[.25em] text-zinc-600">2D animation · 3D art · CGI visuals</p>
          </div>
          <div className="lg:pl-3">
            <p className="eyebrow mb-7 flex items-center gap-2"><Sparkles size={14} /> Independent animation & visual studio</p>
            <h1 className="max-w-3xl text-6xl font-black leading-[.94] tracking-[-.075em] sm:text-7xl lg:text-[88px]">
              IMAGINATION,<br /><span className="gradient-text">BROUGHT TO LIFE.</span>
            </h1>
            <p className="muted mt-8 max-w-xl text-base leading-8">DE_ANIMATOR creates 2D and 3D animation, CGI product visuals, AI-assisted motion content and animated website experiences that help brands present ideas with impact.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-primary">Explore portfolio <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="btn btn-outline">Request a project quote</Link>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div><p className="text-2xl font-black">2D</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-zinc-500">Storytelling</p></div>
              <div><p className="text-2xl font-black">3D</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-zinc-500">CGI worlds</p></div>
              <div><p className="text-2xl font-black">AI</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-zinc-500">Creative motion</p></div>
            </div>
            <div className="mt-12 flex items-center gap-3 text-xs tracking-wide text-zinc-500"><span className="h-px w-10 bg-violet-400" /> SCROLL TO EXPLORE <ArrowDown size={13} /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow mb-4">Selected concepts</p><h2 className="section-heading">Ideas shaped<br />into visual worlds.</h2></div>
            <Link href="/portfolio" className="btn btn-outline w-fit">View all projects <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map(project => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section className="section border-y border-white/5 bg-[#0d0d14]">
        <div className="container">
          <p className="eyebrow mb-4">Creative capabilities</p>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-heading max-w-2xl">A full spectrum<br />of visual craft.</h2>
            <p className="muted max-w-sm leading-7">A flexible creative approach that connects concept, design, animation and final delivery into one considered visual experience.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, Icon], index) => (
              <div className="service-card" key={title}>
                <div className="mb-9 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300"><Icon size={21} /></div>
                <p className="eyebrow">0{index + 1} / Service</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="muted mt-3 text-sm leading-7">{desc}</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn btn-outline mt-8">Explore all services <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow mb-4">Watch & explore</p><h2 className="section-heading">Animation in<br />motion.</h2><p className="muted mt-5 max-w-xl leading-7">A curated selection of animation references from independent artists and studios, spanning 2D, 3D, CGI and motion design.</p></div>
            <Link href="/showreel" className="btn btn-outline w-fit">View video library <ArrowUpRight size={15} /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {showreels.slice(0, 2).map(video => <VideoCard key={video.id} video={video} />)}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/5 bg-[#0d0d14]">
        <div className="container">
          <div className="mb-12"><p className="eyebrow mb-4">A considered process</p><h2 className="section-heading">From the first idea<br />to the final frame.</h2></div>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map(([number, title, desc]) => <article className="process-card" key={number}><p className="text-sm font-bold text-violet-300">{number}</p><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="muted mt-3 text-sm leading-7">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-[28px] border border-violet-300/20 bg-[radial-gradient(ellipse_at_top_right,#5b3b9c44,transparent_55%),#11111a] px-7 py-16 text-center md:px-16">
            <p className="eyebrow mb-5">Have an idea in mind?</p>
            <h2 className="section-heading mx-auto max-w-3xl">Let’s make something<br /><span className="gradient-text">unforgettable.</span></h2>
            <p className="muted mx-auto mt-5 max-w-lg leading-7">Share your brief and receive a project-specific scope, fixed-price quote and estimated delivery timeline.</p>
            <Link href="/contact" className="btn btn-primary mt-8">Request a project quote <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

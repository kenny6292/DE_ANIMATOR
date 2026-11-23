"use client";
import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const whatsappNumber = "2347046638359";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

export default function Contact() {
  const [status, setStatus] = useState("");

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const message = [
      "Hello DE_ANIMATOR, I would like to discuss an animation project.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email || "Not provided"}`,
      `Category: ${data.category || "Not specified"}`,
      `Budget: ${data.budget || "Not specified"}`,
      `Timeline: ${data.timeline || "Not specified"}`,
      "",
      "Project details:",
      data.message
    ].join("\\n");

    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Your project brief is ready in WhatsApp. Send the message there to complete your inquiry.");
  }

  return (
    <main className="section min-h-screen">
      <div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-5">Let’s create something</p>
          <h1 className="section-heading">Have a project?<br /><span className="gradient-text">Let’s talk.</span></h1>
          <p className="muted mt-6 max-w-md leading-8">Tell us what you want to create, where it will be used and when you need it. Your project brief will open in WhatsApp so we can discuss the scope, price and delivery estimate directly.</p>
          <div className="mt-10 space-y-5">
            <a href={`${whatsappBase}?text=${encodeURIComponent("Hello DE_ANIMATOR, I would like to discuss an animation project.")}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-violet-200">
              <span className="rounded-xl border border-white/10 p-3 text-violet-300"><MessageCircle /></span>
              <span><span className="block text-xs text-zinc-500">WhatsApp</span><span className="mt-1 block text-sm">+234 704 663 8359</span></span>
              <ArrowUpRight size={15} className="ml-auto text-zinc-500" />
            </a>
          </div>
          <p className="muted mt-6 text-xs">Email inquiries are temporarily unavailable. Please use WhatsApp for now.</p>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-[#11111a] p-6 md:p-9">
          <div className="mb-6">
            <p className="text-sm font-semibold text-white">Project brief</p>
            <p className="muted mt-1 text-xs leading-6">Share a few details. WhatsApp will open with your message ready to send.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs text-zinc-400">Your name<input required name="name" className="input mt-2" placeholder="Full name" /></label>
            <label className="text-xs text-zinc-400">Email address (optional)<input type="email" name="email" className="input mt-2" placeholder="you@example.com" /></label>
            <label className="text-xs text-zinc-400 sm:col-span-2">Project category<select name="category" className="input mt-2"><option>3D Animation / CGI</option><option>2D Animation</option><option>Product Animation</option><option>AI Animation</option><option>Motion Graphics</option><option>Website Animation</option><option>Character / VTuber</option><option>Other</option></select></label>
            <label className="text-xs text-zinc-400">Estimated budget<input name="budget" className="input mt-2" placeholder="e.g. $500–$1,000" /></label>
            <label className="text-xs text-zinc-400">Desired timeline<input name="timeline" className="input mt-2" placeholder="e.g. 2–3 weeks" /></label>
            <label className="text-xs text-zinc-400 sm:col-span-2">Tell us about your project<textarea required name="message" rows="5" className="input mt-2" placeholder="Describe the animation, product, audience, preferred style, video length and where it will be used." /></label>
          </div>
          <button className="btn btn-primary mt-6 w-full">Continue to WhatsApp <ArrowUpRight size={15} /></button>
          {status && <p role="status" className="mt-4 text-sm text-violet-200">{status}</p>}
          <p className="mt-4 text-center text-[11px] text-zinc-600">Your message will only be sent when you press Send in WhatsApp.</p>
        </form>
      </div>
    </main>
  );
}

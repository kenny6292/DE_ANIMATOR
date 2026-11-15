"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const emailAddress = "kennymichael322@gmail.com";
const whatsappNumber = "2347068239179";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello DE_ANIMATOR, I would like to discuss an animation project.")}`;

export default function Contact() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setStatus(result.message);
      if (response.ok) form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="section min-h-screen">
      <div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-5">Let’s create something</p>
          <h1 className="section-heading">Have a project?<br /><span className="gradient-text">Let’s talk.</span></h1>
          <p className="muted mt-6 max-w-md leading-8">Share your idea, timeline and what you have in mind. I’ll get back to you to discuss the next steps.</p>
          <div className="mt-10 space-y-5">
            <a href={`mailto:${emailAddress}`} className="flex items-center gap-4 transition hover:text-violet-200">
              <span className="rounded-xl border border-white/10 p-3 text-violet-300"><Mail /></span>
              <span><span className="block text-xs text-zinc-500">Email</span><span className="mt-1 block text-sm">{emailAddress}</span></span>
              <ArrowUpRight size={15} className="ml-auto text-zinc-500" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-violet-200">
              <span className="rounded-xl border border-white/10 p-3 text-violet-300"><MessageCircle /></span>
              <span><span className="block text-xs text-zinc-500">WhatsApp</span><span className="mt-1 block text-sm">+234 706 823 9179</span></span>
              <ArrowUpRight size={15} className="ml-auto text-zinc-500" />
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-[#11111a] p-6 md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs text-zinc-400">Your name<input required name="name" className="input mt-2" placeholder="Full name" /></label>
            <label className="text-xs text-zinc-400">Email address<input required type="email" name="email" className="input mt-2" placeholder="you@example.com" /></label>
            <label className="text-xs text-zinc-400 sm:col-span-2">Project category<select name="category" className="input mt-2"><option>3D Animation / CGI</option><option>2D Animation</option><option>Product Animation</option><option>Motion Graphics</option><option>Character / VTuber</option><option>Other</option></select></label>
            <label className="text-xs text-zinc-400">Estimated budget<input name="budget" className="input mt-2" placeholder="e.g. $500–$1,000" /></label>
            <label className="text-xs text-zinc-400">Desired timeline<input name="timeline" className="input mt-2" placeholder="e.g. 2–3 weeks" /></label>
            <label className="text-xs text-zinc-400 sm:col-span-2">Tell me about your project<textarea required name="message" rows="5" className="input mt-2" placeholder="What would you like to create?" /></label>
          </div>
          <button disabled={busy} className="btn btn-primary mt-6 w-full disabled:opacity-50">{busy ? "Sending..." : "Send project inquiry"} <ArrowUpRight size={15} /></button>
          {status && <p role="status" className="mt-4 text-sm text-violet-200">{status}</p>}
          <p className="mt-4 text-center text-[11px] text-zinc-600">Your information will only be used to respond to this inquiry.</p>
        </form>
      </div>
    </main>
  );
}

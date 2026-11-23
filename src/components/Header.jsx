"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Work", "/portfolio"], ["Showreel", "/showreel"], ["Services", "/services"], ["About", "/about"]];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080d]/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="text-lg font-black tracking-[-.07em]">
          DE<span className="text-violet-400">_</span>ANIMATOR
          <span className="ml-2 align-top text-[9px] tracking-[.2em] text-zinc-500">STUDIO</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {links.map(([name, href]) => <Link className="nav-link" href={href} key={name}>{name}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary !px-3 !py-3 sm:!px-4">
            <span className="hidden sm:inline">Start a project</span><span className="sm:hidden">Contact</span><ArrowUpRight size={15} />
          </Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 bg-[#0d0d14] px-5 py-3 md:hidden">
          {links.map(([name, href]) => (
            <Link key={name} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[.06] py-4 text-sm font-medium text-zinc-200 last:border-0">
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
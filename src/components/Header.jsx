import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [["Work", "/portfolio"], ["Services", "/services"], ["About", "/about"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080d]/85 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-[-.07em]">
          DE<span className="text-violet-400">_</span>ANIMATOR
          <span className="ml-2 align-top text-[9px] tracking-[.2em] text-zinc-500">STUDIO</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([name, href]) => <Link className="nav-link" href={href} key={name}>{name}</Link>)}
        </nav>
        <Link href="/contact" className="btn btn-primary !px-4 !py-3">
          Start a project <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}
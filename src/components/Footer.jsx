import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <Link href="/" className="text-xl font-black tracking-[-.07em]">DE_ANIMATOR</Link>
          <p className="mt-2 text-sm text-zinc-500">Bringing imagination to life.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <Link className="footer-link" href="/portfolio">Portfolio</Link>
          <Link className="footer-link" href="/services">Services</Link>
          <Link className="footer-link" href="/about">About</Link>
          <Link className="footer-link" href="/contact">Contact</Link>
        </div>
        <p className="text-xs text-zinc-600">© {new Date().getFullYear()} DE_ANIMATOR. All rights reserved.</p>
      </div>
    </footer>
  );
}
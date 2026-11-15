import Link from "next/link";

const emailAddress = "kennymichael322@gmail.com";
const whatsappUrl = "https://wa.me/2347068239179";

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
        <div className="flex flex-col gap-2 text-xs text-zinc-500">
          <a className="footer-link" href={`mailto:${emailAddress}`}>{emailAddress}</a>
          <a className="footer-link" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +234 706 823 9179</a>
          <p className="mt-2 text-zinc-600">© {new Date().getFullYear()} DE_ANIMATOR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import cvFile from "../imports/Daniyal_Jamil_CV.pdf?url";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ onHome }: { onHome: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={onHome}
          className="group flex items-center gap-2 font-mono text-sm text-foreground"
        >
          <span className="grid h-7 w-7 place-items-center rounded border border-border-strong bg-surface text-accent">
            ~
          </span>
          <span className="tracking-tight">daniyal<span className="text-accent">.dev</span></span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 font-mono text-sm text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:text-accent hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.55)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={cvFile}
            download="Daniyal_Jamil_CV.pdf"
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3.5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            <FiDownload className="text-base" /> CV
          </a>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-md border border-border-strong text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-4 pt-2 backdrop-blur md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 font-mono text-sm text-white/90 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={cvFile}
            download="Daniyal_Jamil_CV.pdf"
            className="mt-1 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3.5 py-2 font-mono text-sm text-accent"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}

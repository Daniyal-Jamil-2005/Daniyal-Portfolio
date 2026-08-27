import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { certificates, type Certificate } from "../data/certs";

export default function Certificates() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Certificate | null>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="certs" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            index="04"
            tag="certifications"
            title="Certifications"
            desc="Verified coursework, hackathons and CTF placements."
          />
          <div className="mb-10 hidden shrink-0 gap-2 md:mb-14 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="grid h-10 w-10 place-items-center rounded-md border border-border-strong bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="grid h-10 w-10 place-items-center rounded-md border border-border-strong bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 sm:scroll-pl-8 sm:px-8"
      >
        {certificates.map((cert) => (
          <button
            key={cert.title}
            onClick={() => setActive(cert)}
            className="group relative w-[300px] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-surface text-left transition-colors hover:border-border-strong sm:w-[340px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
              <img
                src={cert.image}
                alt={`${cert.title} — ${cert.issuer}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md border border-border-strong bg-background/70 text-muted opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <FiMaximize2 className="text-sm" />
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-border p-4">
              <div>
                <h3 className="font-semibold text-foreground">{cert.title}</h3>
                <p className="font-mono text-xs text-muted">{cert.issuer}</p>
              </div>
              <span className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-accent">
                {cert.tag}
              </span>
            </div>
          </button>
        ))}
        <div className="w-1 shrink-0" />
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-5 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-md border border-border-strong bg-surface text-foreground hover:text-accent"
            onClick={() => setActive(null)}
          >
            <FiX />
          </button>
          <figure
            className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-xl border border-border-strong bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={`${active.title} — ${active.issuer}`}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-sm text-muted">
              <span className="text-foreground">{active.title}</span>
              <span>{active.issuer}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

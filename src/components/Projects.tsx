import { useState } from "react";
import { FiExternalLink, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "../data/projects";

function ActionButton({
  href,
  onClick,
  children,
  primary = false,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const cls = `inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border px-2.5 py-2 font-mono text-xs transition-colors ${
    primary
      ? "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
      : "border-border-strong bg-surface-2 text-muted hover:border-accent/40 hover:text-foreground"
  }`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function Preview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.preview && !failed;

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
      {/* branded fallback / backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(74,222,128,0.18), transparent 60%)",
        }}
      />
      {showImage ? (
        <img
          src={project.preview}
          alt={`${project.name} preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2">
          <span className="font-mono text-xs text-faint">~/{project.slug}</span>
          <span className="font-display text-2xl font-bold text-foreground/80">
            {project.name}
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      <span className="absolute left-3 top-3 rounded border border-border-strong bg-background/70 px-2 py-0.5 font-mono text-[11px] text-accent backdrop-blur">
        {project.domain}
      </span>
    </div>
  );
}

function ProjectTile({ project, onSelect }: { project: Project; onSelect: (s: string) => void }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-black/30">
      <Preview project={project} />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.links.live && (
            <ActionButton href={project.links.live} primary>
              <FiExternalLink /> {project.links.liveLabel ?? "Live"}
            </ActionButton>
          )}
          {project.links.apk && (
            <ActionButton href={project.links.apk} primary>
              <FiDownload /> APK
            </ActionButton>
          )}
          <ActionButton href={project.links.github}>
            <SiGithub /> Code
          </ActionButton>
          <ActionButton onClick={() => onSelect(project.slug)}>
            <FiArrowUpRight /> Details
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading
        index="03"
        tag="projects"
        title="Projects"
        desc="Each project ships three ways — try it live, read the code, or dig into the full breakdown."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <ProjectTile project={p} onSelect={onSelect} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

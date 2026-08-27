import { FiArrowLeft, FiExternalLink, FiDownload, FiCheck } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "../data/projects";

export default function ProjectShowcase({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8">
      <button
        onClick={onBack}
        className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
      >
        <FiArrowLeft /> cd ../projects
      </button>

      <div className="mb-2 flex items-center gap-3 font-mono text-xs text-accent">
        <span>{project.domain}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-faint">{project.year}</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-3 text-lg text-accent">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <FiExternalLink /> {project.links.liveLabel ?? "Live"}
          </a>
        )}
        {project.links.apk && (
          <a
            href={project.links.apk}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <FiDownload /> Download APK
          </a>
        )}
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          <SiGithub /> View Code
        </a>
      </div>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="mb-4 font-mono text-sm text-accent">## overview</h2>
          <p className="text-lg leading-relaxed text-muted">{project.overview}</p>
        </section>

        <section>
          <h2 className="mb-4 font-mono text-sm text-accent">## highlights</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 text-sm text-muted"
              >
                <FiCheck className="mt-0.5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        {project.architecture && (
          <section>
            <h2 className="mb-4 font-mono text-sm text-accent">## architecture</h2>
            <div className="rounded-xl border border-border-strong bg-surface p-6 font-mono text-sm leading-relaxed text-cyan">
              {project.architecture}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-4 font-mono text-sm text-accent">## stack</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.stack.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-surface p-5">
                <div className="mb-3 font-mono text-xs text-faint">{s.label}</div>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-muted">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          <FiArrowLeft /> back to all projects
        </button>
      </div>
    </article>
  );
}

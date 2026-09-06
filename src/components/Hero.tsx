import { FiDownload, FiArrowRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import StatusChip from "./StatusChip";
import cvFile from "../imports/Daniyal_Jamil_CV.pdf?url";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <StatusChip label="Available · Lahore, PK" />

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Daniyal Jamil
            <span className="cursor-blink ml-1 font-mono text-accent">_</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-accent sm:text-base">
            DevOps <span className="text-faint">|</span> Cloud Architect{" "}
            <span className="text-faint">|</span> Software Engineer
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
  I work across cloud infrastructure and software development — building with{" "}
  <span className="text-foreground">Kubernetes</span> and{" "}
  <span className="text-foreground">Terraform</span> on{" "}
  <span className="text-foreground">AWS</span> and{" "}
  <span className="text-foreground">GCP</span>, wiring up CI/CD pipelines,
  and shipping backends with <span className="text-foreground">Python</span>,{" "}
  <span className="text-foreground">Django/FastAPI</span> alongside{" "}
  <span className="text-foreground">React</span> front-ends.
</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={cvFile}
              download="Daniyal_Jamil_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-semibold text-background shadow-[0_0_22px_rgba(74,222,128,0.45)] transition-transform hover:-translate-y-0.5"
            >
              <FiDownload className="text-base" /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-surface/60 px-5 py-3 font-mono text-sm text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:drop-shadow-[0_0_14px_rgba(74,222,128,0.55)]"
            >
              View Projects <FiArrowRight />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-white">
            <a
              href="https://github.com/Daniyal-Jamil-2005"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-0.5 hover:text-accent hover:drop-shadow-[0_0_14px_rgba(74,222,128,0.7)]"
            >
              <SiGithub className="text-[2.3rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniyal-jamil-060b66261/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-0.5 hover:text-accent hover:drop-shadow-[0_0_14px_rgba(74,222,128,0.7)]"
            >
              <SiLinkedin className="text-[2.3rem]" />
            </a>
            <a
              href="mailto:daniyaljamil2005@gmail.com"
              aria-label="Email"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-0.5 hover:text-accent hover:drop-shadow-[0_0_14px_rgba(74,222,128,0.7)]"
            >
              <HiOutlineMail className="text-[2.3rem]" />
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-white/25 bg-surface shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-faint">daniyal@cloud: ~</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
              <p className="text-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-foreground">devops &amp; cloud engineer</p>
              <p className="text-muted">
                <span className="text-accent">$</span> cat stack.yaml
              </p>
              <p className="text-cyan">cloud: [aws, gcp]</p>
              <p className="text-cyan">orchestration: kubernetes</p>
              <p className="text-cyan">iac: terraform + ansible</p>
              <p className="text-cyan">ci_cd: [github-actions, argocd]</p>
              <p className="text-cyan">languages: [python, javascript, typescript]</p>
              <p className="text-muted">
                <span className="text-accent">$</span> status --now
              </p>
              <p className="text-accent">
                ● seeking entry-level roles <span className="cursor-blink">▊</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

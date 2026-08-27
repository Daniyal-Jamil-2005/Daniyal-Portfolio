import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import profile from "../imports/profile.jpeg";

const stats = [
  { value: "20+", label: "personal projects shipped" },
  { value: "AWS SAA", label: "Solutions Architect – Associate" },
  { value: "4+", label: "years building & shipping" },
  { value: "6", label: "certifications earned" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading index="01" tag="about" title="About" />

      <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
        <Reveal>
          <div className="mx-auto flex w-full max-w-[220px] flex-col items-center gap-4 lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full border border-dashed border-border" />
              <div className="relative rounded-full border border-border-strong bg-surface p-1.5 shadow-xl shadow-black/40">
                <img
                  src={profile}
                  alt="Daniyal Jamil"
                  className="h-40 w-40 rounded-full object-cover sm:h-44 sm:w-44"
                  loading="lazy"
                />
              </div>
              <span className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-border-strong bg-background/90 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="pulse-dot absolute inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                online
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a <span className="text-foreground">DevOps &amp; Cloud engineer</span> based
              in Lahore, Pakistan, focused on making software delivery boring — in the best
              way. I containerize workloads, wire up infrastructure-as-code, and build CI/CD
              pipelines that turn a git push into a safe, repeatable deploy.
            </p>
            <p>
              My work spans <span className="text-foreground">AWS</span> and{" "}
              <span className="text-foreground">GCP</span>, orchestrated with{" "}
              <span className="text-foreground">Kubernetes</span> and provisioned with{" "}
              <span className="text-foreground">Terraform</span>. I&apos;m currently learning{" "}
              <span className="text-foreground">Ansible</span>,{" "}
              <span className="text-foreground">Prometheus</span> and{" "}
              <span className="text-foreground">Grafana</span> to level up my automation and
              observability.
            </p>
            <p>
              I also come from a <span className="text-foreground">software engineering</span>{" "}
              background — building backends with{" "}
              <span className="text-foreground">Django</span>,{" "}
              <span className="text-foreground">FastAPI</span> and{" "}
              <span className="text-foreground">REST APIs</span>,{" "}
              <span className="text-foreground">React</span> front-ends, and developing{" "}
              <span className="text-foreground">Python</span> applications including
              Python-powered AI web apps.
            </p>
            <p>
              Right now I&apos;m{" "}
              <span className="text-accent">actively seeking entry-level DevOps &amp; Cloud roles</span>{" "}
              where I can automate the boring parts and keep production calm.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/20 bg-surface p-5 shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(74,222,128,0.3)]"
                >
                  <div className="font-display text-3xl font-bold text-accent drop-shadow-[0_0_10px_rgba(74,222,128,0.4)]">
                    {s.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[13px] text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

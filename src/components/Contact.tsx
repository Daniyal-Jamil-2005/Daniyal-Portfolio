import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa6";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: FiMail,
    label: "email",
    value: "daniyaljamil2005@gmail.com",
    href: "mailto:daniyaljamil2005@gmail.com",
  },
  {
    icon: FiPhone,
    label: "phone",
    value: "+92 319 0621969",
    href: "tel:+923190621969",
  },
  {
    icon: SiGithub,
    label: "github",
    value: "Daniyal-Jamil-2005",
    href: "https://github.com/Daniyal-Jamil-2005",
  },
  {
    icon: SiLinkedin,
    label: "linkedin",
    value: "in/daniyal-jamil",
    href: "https://www.linkedin.com/in/daniyal-jamil-060b66261/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading index="05" tag="contact" title="Get in touch" />

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-5 py-3 font-mono text-xs text-faint">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2">contact.sh</span>
          </div>

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-sm text-accent">$ echo $STATUS</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                Open to entry-level DevOps &amp; Cloud roles.
              </h3>
              <p className="mt-4 max-w-md text-muted">
                Got a pipeline that needs taming or infrastructure to automate? I&apos;d love
                to hear about it. Fastest way to reach me is email.
              </p>
              <a
                href="mailto:daniyaljamil2005@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Say hello <FiArrowUpRight />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group rounded-xl border border-white/20 bg-surface-2 p-4 shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(74,222,128,0.35)]"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-white/70">
                      <Icon className="text-accent" /> {c.label}
                    </div>
                    <div className="mt-2 truncate text-sm text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] transition-colors group-hover:text-accent">
                      {c.value}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

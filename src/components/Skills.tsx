import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading
        index="02"
        tag="skills"
        title="Toolchain"
        desc="The stack I reach for to build, ship, and keep systems running."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-white/20 bg-surface p-6 shadow-[0_0_22px_rgba(255,255,255,0.07)] transition-all hover:border-accent/40 hover:shadow-[0_0_26px_rgba(74,222,128,0.22)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <span className="font-mono text-xs text-accent">~/{group.tag}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-lg border border-white/20 bg-surface-2 px-3 py-2 shadow-[0_0_12px_rgba(255,255,255,0.06)] transition-all hover:border-accent/50 hover:shadow-[0_0_16px_rgba(74,222,128,0.28)]"
                    >
                      <Icon
                        className="text-lg transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="font-mono text-sm text-muted transition-colors group-hover:text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

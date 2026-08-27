export default function SectionHeading({
  index,
  tag,
  title,
  desc,
}: {
  index: string;
  tag: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-accent">
        <span className="text-faint">{index}</span>
        <span>~/{tag}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 max-w-2xl text-muted">{desc}</p>}
    </div>
  );
}

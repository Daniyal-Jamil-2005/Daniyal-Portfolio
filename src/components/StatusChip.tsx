export default function StatusChip({ label = "Available for work" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
      <span className="relative flex h-2 w-2">
        <span className="pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {label}
    </span>
  );
}

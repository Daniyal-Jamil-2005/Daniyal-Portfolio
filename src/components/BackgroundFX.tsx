export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-pan absolute inset-0 grid-bg opacity-60" />
      <div
        className="drift-a absolute -top-40 left-1/2 h-[520px] w-[820px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.35), transparent 70%)" }}
      />
      <div
        className="drift-b absolute bottom-[-10%] right-[-5%] h-[420px] w-[520px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(56,224,212,0.35), transparent 70%)" }}
      />
      {/* slow green scanline sweep */}
      <div
        className="scan-sweep absolute inset-x-0 top-0 h-px opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(74,222,128,0.55) 50%, transparent)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 55%, rgba(10,13,14,0.85) 100%)",
        }}
      />
    </div>
  );
}

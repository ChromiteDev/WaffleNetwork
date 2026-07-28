export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-waffle to-waffle-deep shadow-[0_8px_24px_-8px_var(--waffle)]">
        <div className="grid h-6 w-6 grid-cols-3 grid-rows-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="rounded-[2px] bg-white/70"
              style={{ opacity: 0.55 + ((i * 37) % 45) / 100 }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
          Waffle<span className="text-waffle-deep">.</span>Network
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Survival · Fair Play
        </span>
      </div>
    </div>
  );
}

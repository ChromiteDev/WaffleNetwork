import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { SERVER } from "@/lib/constants";
import { motion } from "motion/react";

type Props = {
  variant?: "hero" | "compact";
  className?: string;
};

export function IPCopy({ variant = "hero", className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER.ip);
      setCopied(true);
      toast.success("Server IP copied!", { description: SERVER.ip });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy. Long-press to copy manually.");
    }
  };

  if (variant === "compact") {
    return (
      <button
        onClick={copy}
        className={`group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 font-mono text-sm text-foreground transition hover:border-waffle hover:shadow-soft ${className}`}
      >
        <span>{SERVER.ip}</span>
        {copied ? <Check className="h-4 w-4 text-waffle-deep" /> : <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />}
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-waffle/40 bg-white/70 p-1.5 backdrop-blur-xl btn-glow ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-waffle/15 via-transparent to-gold/10" />
      <div className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 sm:px-5">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-waffle to-waffle-deep">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse-glow" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Server Address
          </div>
          <div className="truncate font-mono text-base font-semibold text-charcoal sm:text-lg">
            {SERVER.ip}
          </div>
        </div>
        <button
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-charcoal px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-charcoal/85 sm:px-4 sm:text-sm"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copy IP
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroWorld from "@/assets/hero-world.jpg";
import { IPCopy } from "./IPCopy";
import { SERVER } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-hero-radial pt-28 sm:pt-36">
      {/* Waffle grid pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 waffle-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      {/* Floating blocks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[
          { x: "8%", y: "22%", s: 26, d: 0 },
          { x: "82%", y: "18%", s: 34, d: 1.2 },
          { x: "70%", y: "62%", s: 20, d: 0.6 },
          { x: "14%", y: "70%", s: 30, d: 1.8 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-md bg-gradient-to-br from-waffle to-waffle-deep opacity-40 shadow-glow animate-float-slow"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s,
              animationDelay: `${b.d}s`,
              transform: "rotate(8deg)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-waffle-deep" />
              Season 1 · Now Online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-5xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
            >
              Survival <span className="text-gradient-gold">Without</span>
              <br />
              Pay-To-Win.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              A fair Minecraft survival experience where ranks are earned, progress
              matters, and every achievement feels rewarding. Built by players, for players.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#join"
                className="group inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-charcoal/85 btn-glow"
              >
                Play Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={SERVER.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:border-waffle hover:bg-waffle/5"
              >
                <MessageCircle className="h-4 w-4" /> Join Discord
              </a>
            </motion.div>

            <div className="mt-8 max-w-md">
              <IPCopy />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
                Java 1.21.x
              </span>
              <span>· No P2W</span>
              <span>· Earnable Ranks</span>
              <span>· Active Devs</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-waffle/30 shadow-elegant">
              <img
                src={heroWorld}
                alt="Stylized voxel world at golden hour"
                width={1920}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/40 via-transparent to-waffle/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl glass-dark p-3">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-waffle">
                    Live Preview
                  </div>
                  <div className="truncate text-sm font-semibold text-white">
                    A world where effort matters.
                  </div>
                </div>
                <div className="shrink-0 rounded-lg bg-waffle px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-charcoal">
                  1.21
                </div>
              </div>
            </div>
            {/* Corner floating block */}
            <div className="absolute -right-4 -top-4 h-16 w-16 rotate-12 rounded-xl bg-gradient-to-br from-waffle to-waffle-deep shadow-glow animate-float-slow" />
            <div className="absolute -bottom-5 -left-5 h-12 w-12 -rotate-6 rounded-xl bg-charcoal shadow-elegant animate-float-slow" style={{ animationDelay: "1.2s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

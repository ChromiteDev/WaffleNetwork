import { motion } from "motion/react";
import { Play, Map, Award, Crown, Users } from "lucide-react";

const steps = [
  { icon: Play, label: "Start your journey", desc: "Spawn in and pick your path." },
  { icon: Map, label: "Play and explore", desc: "Gather, build, and discover." },
  { icon: Award, label: "Earn achievements", desc: "Every milestone is meaningful." },
  { icon: Crown, label: "Unlock progression", desc: "Ranks earned through gameplay." },
  { icon: Users, label: "Join the community", desc: "Become part of the network." },
];

export function Progression() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
            Progression
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            The path from <span className="text-gradient-gold">new player</span> to legend.
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-waffle/40 to-transparent md:block" />
          <ol className="grid gap-6 md:gap-4">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`relative grid items-center gap-6 md:grid-cols-2`}
                >
                  <div className={`${left ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-waffle/50 hover:shadow-elegant">
                      <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-waffle to-waffle-deep text-charcoal">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-muted-foreground">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-bold text-foreground">{s.label}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-waffle shadow-glow ring-4 ring-background md:block" />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

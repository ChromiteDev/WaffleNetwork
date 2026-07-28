import { motion } from "motion/react";
import { IPCopy } from "./IPCopy";

const steps = [
  { n: "01", title: "Open Minecraft", desc: "Launch Minecraft Java Edition (1.21+)." },
  { n: "02", title: "Go to Multiplayer", desc: "Click 'Multiplayer' from the main menu." },
  { n: "03", title: "Add server", desc: "Paste mc.wafflenetwork.net into the address." },
  { n: "04", title: "Start playing", desc: "Join, say hi, and begin your adventure." },
];

export function HowToJoin() {
  return (
    <section id="join" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
              How To Join
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Get in-game in <span className="text-gradient-gold">under a minute</span>.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Four quick steps, and you're on the server. Ready when you are.
            </p>
            <div className="mt-8 max-w-md">
              <IPCopy />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-waffle/50 hover:shadow-elegant"
              >
                <div className="font-display text-4xl font-black text-waffle/40 transition group-hover:text-waffle">
                  {s.n}
                </div>
                <div className="mt-2 text-lg font-bold text-foreground">{s.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { MessageCircle, Bell, CalendarDays, LifeBuoy } from "lucide-react";
import { SERVER } from "@/lib/constants";

const perks = [
  { icon: Bell, label: "Updates", desc: "Be first to know about changes." },
  { icon: CalendarDays, label: "Events", desc: "Join community-only events." },
  { icon: MessageCircle, label: "Conversations", desc: "Chat with fellow players." },
  { icon: LifeBuoy, label: "Support", desc: "Get help from staff, fast." },
];

export function Community() {
  return (
    <section id="community" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-charcoal/20 bg-charcoal p-8 text-white shadow-elegant sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 -z-0 opacity-30 waffle-grid" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-waffle/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-waffle-deep/25 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-waffle/30 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-waffle">
                <MessageCircle className="h-3.5 w-3.5" /> Discord Community
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Where the network <span className="text-gradient-gold">actually hangs out</span>.
              </h2>
              <p className="mt-4 max-w-lg text-white/70">
                Waffle Network is more than a server. Join our Discord for events,
                sneak-peeks, support, and a genuinely friendly community.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SERVER.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-waffle to-waffle-deep px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-charcoal btn-glow transition hover:brightness-105"
                >
                  <MessageCircle className="h-4 w-4" /> Join our Discord
                </a>
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
                >
                  Play Now
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {perks.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-waffle/15 text-waffle">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-bold text-white">{p.label}</div>
                  <div className="mt-1 text-sm text-white/60">{p.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

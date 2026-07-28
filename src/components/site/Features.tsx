import { Shield, Trophy, Pickaxe, Users, TrendingUp, Wrench } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Shield,
    title: "No Pay-To-Win",
    desc: "Every player competes on equal footing. Zero purchasable stat advantages, ever.",
  },
  {
    icon: Trophy,
    title: "Earnable Ranks",
    desc: "Ranks come from dedication and gameplay — not a checkout page.",
  },
  {
    icon: Pickaxe,
    title: "Survival Experience",
    desc: "Build, explore, and shape your own adventure in a lovingly-tuned world.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "A welcoming, moderated space designed for players who want to belong.",
  },
  {
    icon: TrendingUp,
    title: "Fair Progression",
    desc: "Your time and effort translate directly into real, meaningful progress.",
  },
  {
    icon: Wrench,
    title: "Active Development",
    desc: "A server built to improve — new updates, tweaks, and events, always.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
            Why Waffle Network
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Built on <span className="text-gradient-gold">fairness</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The values that make Waffle Network different — not just as a server,
            but as a place worth coming back to.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-waffle/50 hover:shadow-elegant"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-waffle/25 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-waffle to-waffle-deep text-charcoal shadow-[0_10px_24px_-10px_var(--waffle)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

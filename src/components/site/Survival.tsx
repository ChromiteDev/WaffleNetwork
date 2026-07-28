import { motion } from "motion/react";
import { Hammer, Compass, Heart, Sprout } from "lucide-react";
import voxelCastle from "@/assets/voxel-castle.jpg";

const pillars = [
  { icon: Hammer, title: "Build", desc: "Bases, farms, castles — creations that last." },
  { icon: Compass, title: "Explore", desc: "Vast biomes, custom terrain, hidden corners." },
  { icon: Sprout, title: "Progress", desc: "Grind that pays off with real advancement." },
  { icon: Heart, title: "Belong", desc: "Meet friends. Join events. Stay a while." },
];

export function Survival() {
  return (
    <section id="survival" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-waffle/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-waffle/30 shadow-elegant">
              <img
                src={voxelCastle}
                alt="Voxel castle floating in warm sky"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass p-4 shadow-soft sm:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Season 1
              </div>
              <div className="mt-1 font-display text-2xl font-black text-foreground">
                Fresh world.
              </div>
              <div className="text-xs text-muted-foreground">Endless possibilities.</div>
            </div>
          </motion.div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
              The Survival Experience
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Your world. <span className="text-gradient-gold">Your story.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Waffle Network is tuned for long-term survival play. Carefully
              balanced, respectful of your time, and full of moments that
              actually matter.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-waffle/50"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-waffle/15 text-waffle-deep">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground">{p.title}</div>
                    <div className="text-sm text-muted-foreground">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { IPCopy } from "./IPCopy";
import { SERVER } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 waffle-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black leading-[1.02] tracking-tight text-charcoal sm:text-7xl"
        >
          Your adventure <br />
          <span className="text-gradient-gold">starts here.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Join Waffle Network and experience a survival server where effort actually
          matters. Fair, friendly, and forever no pay-to-win.
        </motion.p>

        <div className="mx-auto mt-10 max-w-md">
          <IPCopy />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-xl bg-charcoal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white btn-glow transition hover:bg-charcoal/85"
          >
            Play Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={SERVER.discord}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:border-waffle hover:bg-waffle/5"
          >
            <MessageCircle className="h-4 w-4" /> Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    q: "How do I join?",
    a: "Open Minecraft Java Edition, go to Multiplayer, click Add Server, and paste mc.wafflenetwork.net as the address. Save and connect.",
  },
  {
    q: "What version does the server support?",
    a: "We support the latest stable Minecraft Java release (currently 1.21.x). Older recent versions typically connect fine thanks to protocol support.",
  },
  {
    q: "Is the server pay-to-win?",
    a: "No. Waffle Network is strictly non pay-to-win. Ranks and progression are earned through gameplay — never bought.",
  },
  {
    q: "How do ranks work?",
    a: "Ranks unlock as you play, hit milestones, and contribute to the community. Every rank rewards dedication, not spending.",
  },
  {
    q: "How do I join the community?",
    a: "Jump into our Discord server — that's where events, updates, and the wider Waffle Network community all live.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
            FAQ
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Quick <span className="text-gradient-gold">answers</span>.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-border bg-card p-2 shadow-soft"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, MessageSquareWarning, Swords, Gavel, Users, Wrench } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules — Waffle Network" },
      {
        name: "description",
        content:
          "The rules that keep Waffle Network fair, friendly, and fun. Read our community, gameplay, and chat guidelines.",
      },
      { property: "og:title", content: "Rules — Waffle Network" },
      {
        property: "og:description",
        content: "The rules that keep Waffle Network fair, friendly, and fun.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/rules" },
    ],
    links: [{ rel: "canonical", href: "/rules" }],
  }),
  component: RulesPage,
});

const categories = [
  {
    icon: Users,
    title: "Community & Respect",
    color: "from-waffle to-waffle-deep",
    rules: [
      { q: "Be respectful", a: "Treat every player with kindness. Harassment, hate speech, and personal attacks are never tolerated." },
      { q: "No discrimination", a: "Racism, sexism, homophobia, and any form of discrimination result in immediate action." },
      { q: "Keep it welcoming", a: "New players deserve a warm welcome. Help when you can." },
    ],
  },
  {
    icon: MessageSquareWarning,
    title: "Chat Conduct",
    color: "from-charcoal to-charcoal",
    rules: [
      { q: "No spam", a: "Avoid repeated messages, all-caps flooding, and character spam." },
      { q: "English in public chat", a: "Keep public channels in English so everyone can follow along. Use DMs for other languages." },
      { q: "No advertising", a: "Don't promote other servers, services, or products in chat." },
    ],
  },
  {
    icon: Swords,
    title: "Gameplay",
    color: "from-gold to-waffle-deep",
    rules: [
      { q: "No cheating", a: "Hacked clients, x-ray, auto-clickers, and duplication glitches are banned." },
      { q: "No griefing", a: "Do not destroy or alter other players' builds without permission." },
      { q: "No exploiting", a: "Report bugs to staff instead of abusing them. Abuse leads to rollback and bans." },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Accounts & Fair Play",
    color: "from-waffle to-gold",
    rules: [
      { q: "One account per player", a: "Alt accounts to bypass punishments or exploit systems are not allowed." },
      { q: "Account security", a: "Protect your account. Waffle Network is not responsible for compromised accounts." },
      { q: "No pay-to-win, ever", a: "Purchasable advantages don't exist here. Any workaround attempts are punished." },
    ],
  },
  {
    icon: Gavel,
    title: "Staff & Reporting",
    color: "from-charcoal to-waffle-deep",
    rules: [
      { q: "Staff decisions are final", a: "Disagreements go to Discord appeals, not public arguments in chat." },
      { q: "Report responsibly", a: "Use in-game or Discord channels to report issues with clear evidence." },
      { q: "No impersonation", a: "Never impersonate staff or other players." },
    ],
  },
  {
    icon: Wrench,
    title: "Server & Tech",
    color: "from-waffle to-charcoal",
    rules: [
      { q: "No lag machines", a: "Redstone or entity contraptions designed to lag the server are prohibited." },
      { q: "Reasonable farms", a: "Keep farms performant. Staff may request modifications on excessive builds." },
      { q: "Client mods", a: "Fair-play mods (Optifine, minimap without cave/entity radar) are fine. When in doubt, ask." },
    ],
  },
];

function RulesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
          <div className="pointer-events-none absolute inset-0 -z-10 waffle-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="mx-auto max-w-4xl px-4 pb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-waffle/40 bg-waffle/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal">
              Server Rules
            </div>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-charcoal sm:text-6xl">
              Fair, friendly, <span className="text-gradient-gold">fun</span>.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              A short list of rules that keep Waffle Network a place worth playing on.
              Follow these and you'll fit right in.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${cat.color} text-charcoal`}>
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{cat.title}</h2>
                </div>
                <Accordion type="single" collapsible className="mt-3">
                  {cat.rules.map((r, idx) => (
                    <AccordionItem key={idx} value={`${cat.title}-${idx}`} className="border-b last:border-b-0">
                      <AccordionTrigger className="py-4 text-left text-sm font-semibold hover:no-underline">
                        {r.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-sm text-muted-foreground">
                        {r.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

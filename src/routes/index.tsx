import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ServerStatus } from "@/components/site/ServerStatus";
import { Features } from "@/components/site/Features";
import { Survival } from "@/components/site/Survival";
import { Progression } from "@/components/site/Progression";
import { HowToJoin } from "@/components/site/HowToJoin";
import { Community } from "@/components/site/Community";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waffle Network — Fair Minecraft Survival Server" },
      {
        name: "description",
        content:
          "Join Waffle Network, a fair Minecraft survival server with no pay-to-win. Earnable ranks, active community, and progression that actually matters. IP: mc.wafflenetwork.net",
      },
      { property: "og:title", content: "Waffle Network — Fair Minecraft Survival Server" },
      {
        property: "og:description",
        content:
          "Survival without pay-to-win. Earn ranks, build with friends, and join a community-first Minecraft network.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServerStatus />
        <Features />
        <Survival />
        <Progression />
        <HowToJoin />
        <Community />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

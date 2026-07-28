import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { SERVER } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#survival", label: "Survival" },
  { href: "#community", label: "Community" },
  { href: "/rules", label: "Rules" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "features", "survival", "community"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-3 py-2 transition-all sm:px-4 ${
            scrolled
              ? "glass border-waffle/25 shadow-soft"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="/" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = l.href.startsWith("#") && active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-charcoal"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-waffle to-waffle-deep"
                    />
                  )}
                </a>
              );
            })}
            <a
              href={SERVER.discord}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#join"
              className="hidden shrink-0 items-center rounded-xl bg-gradient-to-br from-waffle to-waffle-deep px-4 py-2 text-sm font-bold uppercase tracking-wide text-charcoal shadow-[0_10px_30px_-8px_var(--waffle)] transition hover:brightness-105 active:scale-[0.98] md:inline-flex"
            >
              Play Now
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 overflow-hidden rounded-2xl glass p-2 md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-waffle/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={SERVER.discord}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-waffle/10"
              >
                Discord
              </a>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-gradient-to-br from-waffle to-waffle-deep px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-charcoal"
              >
                Play Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

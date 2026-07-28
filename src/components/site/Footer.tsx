import { Logo } from "./Logo";
import { IPCopy } from "./IPCopy";
import { SERVER } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A fair Minecraft survival experience where ranks are earned and every
              achievement feels rewarding.
            </p>
            <div className="mt-6 max-w-sm">
              <IPCopy variant="compact" />
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { href: "#home", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#survival", label: "Survival" },
              { href: "#community", label: "Community" },
            ]}
          />
          <FooterCol
            title="Server"
            links={[
              { href: "#join", label: "How to Join" },
              { href: "/rules", label: "Rules" },
              { href: "#faq", label: "FAQ" },
            ]}
          />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Connect
            </div>
            <a
              href={SERVER.discord}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-waffle to-waffle-deep px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-charcoal"
            >
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Waffle Network. All rights reserved.</div>
          <div className="font-mono">{SERVER.ip}</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-foreground/80 transition hover:text-waffle-deep">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

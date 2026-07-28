import { useEffect, useState } from "react";
import { Activity, Users, Wifi, Server, AlertCircle } from "lucide-react";
import { SERVER } from "@/lib/constants";
import { motion } from "motion/react";

type Status = {
  online: boolean;
  players?: { online: number; max: number };
  version?: string;
  motd?: { clean?: string[] };
  ping?: number;
};

export function ServerStatus() {
  const [data, setData] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    const started = performance.now();
    fetch(`https://api.mcsrvstat.us/3/${SERVER.ip}`)
      .then((r) => r.json())
      .then((json) => {
        if (!alive) return;
        setData({ ...json, ping: Math.round(performance.now() - started) });
      })
      .catch(() => alive && setError(true))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const online = !!data?.online;
  const motd = data?.motd?.clean?.join(" ").trim();

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-waffle/8 via-transparent to-gold/10" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <Activity className="h-3.5 w-3.5" /> Live Server Status
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {loading
                  ? "Checking server…"
                  : error
                    ? "Status unavailable"
                    : online
                      ? "We're online. Come play."
                      : "Server currently offline"}
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                {motd && online
                  ? motd
                  : "Live player count and status are pulled directly from the server. When we're down for maintenance, this section will let you know."}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${
                    error || loading
                      ? "bg-muted text-muted-foreground"
                      : online
                        ? "bg-emerald-500/15 text-emerald-700"
                        : "bg-destructive/15 text-destructive"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      error || loading
                        ? "bg-muted-foreground"
                        : online
                          ? "bg-emerald-500 animate-pulse-glow"
                          : "bg-destructive"
                    }`}
                  />
                  {loading ? "Checking" : error ? "Unavailable" : online ? "Online" : "Offline"}
                </span>
                <span className="font-mono text-sm text-muted-foreground">{SERVER.ip}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard
                icon={<Users className="h-4 w-4" />}
                label="Players"
                value={
                  loading
                    ? "—"
                    : error || !online
                      ? "—"
                      : `${data?.players?.online ?? 0} / ${data?.players?.max ?? "?"}`
                }
              />
              <StatCard
                icon={<Server className="h-4 w-4" />}
                label="Version"
                value={loading ? "—" : error || !online ? "—" : data?.version?.split(" ")[0] ?? "1.21"}
              />
              <StatCard
                icon={<Wifi className="h-4 w-4" />}
                label="Latency"
                value={loading ? "—" : error ? "—" : `${data?.ping ?? 0} ms`}
              />
              <StatCard
                icon={error ? <AlertCircle className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                label="Status"
                value={loading ? "…" : error ? "N/A" : online ? "Healthy" : "Down"}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/70 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-waffle/20 text-waffle-deep">
          {icon}
        </span>
        {label}
      </div>
      <div className="mt-2 font-display text-2xl font-black tracking-tight text-foreground">
        {value}
      </div>
    </div>
  );
}

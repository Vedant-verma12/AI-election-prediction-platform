import { ScrollReveal } from "@/components/ScrollReveal";
import { alliances } from "@/utils/mockData";
import { motion } from "framer-motion";
import { Link2, Users, BarChart3 } from "lucide-react";

const allianceColors: Record<string, { bg: string; border: string; text: string }> = {
  nda: { bg: "bg-saffron-light", border: "border-saffron/30", text: "text-saffron" },
  india: { bg: "bg-india-green-light", border: "border-india-green/30", text: "text-india-green" },
  third: { bg: "bg-navy-light", border: "border-navy/30", text: "text-navy" },
};

export default function Alliances() {
  return (
    <div className="container py-6 space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold tracking-tight">Alliance Network</h1>
        <p className="text-muted-foreground text-sm mt-1">Explore political alliances and coalition strengths</p>
      </ScrollReveal>

      {/* Alliance visualization */}
      <ScrollReveal>
        <div className="card-elevated p-6">
          <div className="relative flex items-center justify-center" style={{ minHeight: 320 }}>
            {/* Central node */}
            <div className="absolute w-16 h-16 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-xs font-bold z-10">
              543
              <br />
              <span className="text-[8px] text-muted-foreground">seats</span>
            </div>

            {alliances.map((alliance, i) => {
              const angle = (i * 120 - 90) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const colors = allianceColors[alliance.id];

              return (
                <motion.div
                  key={alliance.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {/* Connection line */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      width: radius,
                      height: 2,
                      left: x > 0 ? -radius : 0,
                      top: "50%",
                      transform: `rotate(${(angle * 180) / Math.PI + (x > 0 ? 180 : 0)}deg)`,
                      transformOrigin: x > 0 ? "right center" : "left center",
                    }}
                  >
                    <line
                      x1="0" y1="1" x2={radius} y2="1"
                      stroke="hsl(var(--border))"
                      strokeWidth={alliance.strength * 3}
                      strokeDasharray="4 2"
                    />
                  </svg>

                  <div className={`relative z-10 w-28 h-28 rounded-xl ${colors.bg} border ${colors.border} flex flex-col items-center justify-center p-2 cursor-pointer hover:shadow-md transition-shadow`}>
                    <p className={`text-sm font-bold ${colors.text}`}>{alliance.name}</p>
                    <p className="text-lg font-bold mt-0.5">{alliance.seats}</p>
                    <p className="text-[9px] text-muted-foreground">seats</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Alliance details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {alliances.map((alliance, i) => {
          const colors = allianceColors[alliance.id];
          return (
            <ScrollReveal key={alliance.id} delay={i * 0.08}>
              <div className={`card-elevated p-4 border-l-4 ${colors.border}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-bold ${colors.text}`}>{alliance.name}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <BarChart3 className="w-3 h-3" />
                    {alliance.seats} seats
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Alliance Strength</span>
                    <span className="font-medium">{(alliance.strength * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${colors.bg.replace("-light", "")}`} style={{ width: `${alliance.strength * 100}%` }} />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1"><Users className="w-3 h-3" />Member Parties</p>
                  <div className="flex flex-wrap gap-1">
                    {alliance.parties.map((p) => (
                      <span key={p} className="px-2 py-0.5 text-[10px] font-medium bg-secondary rounded-md flex items-center gap-1">
                        <Link2 className="w-2.5 h-2.5" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

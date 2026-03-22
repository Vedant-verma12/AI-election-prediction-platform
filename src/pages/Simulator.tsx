import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { partyData, alliances } from "@/utils/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Play, RotateCcw, Settings2, TrendingUp } from "lucide-react";

export default function Simulator() {
  const [allianceToggles, setAllianceToggles] = useState<Record<string, boolean>>({
    nda: true, india: true, third: true,
  });
  const [simulated, setSimulated] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleAlliance = (id: string) => {
    setAllianceToggles((prev) => ({ ...prev, [id]: !prev[id] }));
    setSimulated(false);
  };

  const runSimulation = () => {
    setLoading(true);
    setTimeout(() => {
      setSimulated(true);
      setLoading(false);
    }, 1500);
  };

  const reset = () => {
    setAllianceToggles({ nda: true, india: true, third: true });
    setSimulated(false);
  };

  // Generate simulated data based on toggles
  const simulatedData = partyData.map((p) => {
    let multiplier = 1;
    if (!allianceToggles.nda && (p.name === "BJP")) multiplier = 0.7;
    if (!allianceToggles.india && (p.name === "INC" || p.name === "AAP" || p.name === "TMC" || p.name === "DMK" || p.name === "SP")) multiplier = 0.6;
    if (!allianceToggles.third) multiplier = p.name === "Others" ? 0.5 : multiplier * 1.1;
    return {
      ...p,
      seats: simulated ? Math.round(p.seats * multiplier + (Math.random() * 20 - 10)) : p.seats,
    };
  });

  const totalSeats = simulatedData.reduce((acc, p) => acc + p.seats, 0);
  const winner = simulatedData.reduce((a, b) => (a.seats > b.seats ? a : b));

  return (
    <div className="container py-6 space-y-6 max-w-5xl">
      <ScrollReveal>
        <h1 className="text-2xl font-bold tracking-tight">Scenario Simulator</h1>
        <p className="text-muted-foreground text-sm mt-1">Toggle alliances and see how it impacts seat distribution</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ScrollReveal>
          <div className="card-elevated p-4 space-y-4">
            <h2 className="text-sm font-semibold flex items-center gap-1.5">
              <Settings2 className="w-4 h-4" />
              Controls
            </h2>

            <div className="space-y-3">
              {alliances.map((a) => (
                <label key={a.id} className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="text-[10px] text-muted-foreground">{a.parties.join(", ")}</p>
                  </div>
                  <button
                    onClick={() => toggleAlliance(a.id)}
                    className={`relative w-10 h-5 rounded-full transition-colors ${
                      allianceToggles[a.id] ? "bg-accent" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-card shadow-sm transition-transform ${
                        allianceToggles[a.id] ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </label>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={runSimulation}
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40 active:scale-[0.97]"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
                {loading ? "Running..." : "Simulate"}
              </button>
              <button
                onClick={reset}
                className="px-3 py-2 text-sm font-medium bg-secondary rounded-lg hover:bg-secondary/80 transition-colors active:scale-[0.97]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-2">
          <div className="card-elevated p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Seat Distribution</h2>
              {simulated && (
                <span className="flex items-center gap-1 text-xs font-medium text-accent">
                  <TrendingUp className="w-3 h-3" />
                  Simulated
                </span>
              )}
            </div>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={simulatedData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="short" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="seats" radius={[4, 4, 0, 0]} animationDuration={800}>
                  {simulatedData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {simulated && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-border">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Predicted Winner</p>
                  <p className="font-bold">{winner.name}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Winner Seats</p>
                  <p className="font-bold">{winner.seats}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Majority (272)</p>
                  <p className={`font-bold ${winner.seats >= 272 ? "text-india-green" : "text-destructive"}`}>
                    {winner.seats >= 272 ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

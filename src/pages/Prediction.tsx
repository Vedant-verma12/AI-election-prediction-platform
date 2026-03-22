import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { states, stateConstituencies, parties } from "@/utils/mockData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Activity, TrendingUp, AlertCircle } from "lucide-react";

export default function Prediction() {
  const [state, setState] = useState("");
  const [constituency, setConstituency] = useState("");
  const [party, setParty] = useState("");
  const [result, setResult] = useState<null | { win: number; confidence: number; factors: string[] }>(null);
  const [loading, setLoading] = useState(false);

  const constituencies = state ? (stateConstituencies[state] || ["General 1", "General 2", "General 3"]) : [];

  const handlePredict = () => {
    if (!state || !constituency || !party) return;
    setLoading(true);
    setTimeout(() => {
      setResult({
        win: Math.floor(Math.random() * 40) + 35,
        confidence: Math.floor(Math.random() * 20) + 75,
        factors: ["Incumbency advantage", "Regional sentiment", "Economic indicators", "Caste dynamics", "Alliance strength"],
      });
      setLoading(false);
    }, 1200);
  };

  const comparisonData = result
    ? parties.slice(0, 5).map((p) => ({
        name: p,
        probability: p === party ? result.win : Math.floor(Math.random() * 30) + 5,
        color: p === party ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
      }))
    : [];

  return (
    <div className="container py-6 space-y-6 max-w-4xl">
      <ScrollReveal>
        <h1 className="text-2xl font-bold tracking-tight">Election Prediction</h1>
        <p className="text-muted-foreground text-sm mt-1">AI-powered constituency-level predictions</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="card-elevated p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">State</label>
              <select
                value={state}
                onChange={(e) => { setState(e.target.value); setConstituency(""); setResult(null); }}
                className="w-full px-3 py-2 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="">Select State</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Constituency</label>
              <select
                value={constituency}
                onChange={(e) => { setConstituency(e.target.value); setResult(null); }}
                className="w-full px-3 py-2 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                disabled={!state}
              >
                <option value="">Select Constituency</option>
                {constituencies.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Party</label>
              <select
                value={party}
                onChange={(e) => { setParty(e.target.value); setResult(null); }}
                className="w-full px-3 py-2 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
              >
                <option value="">Select Party</option>
                {parties.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <button
            onClick={handlePredict}
            disabled={!state || !constituency || !party || loading}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]"
          >
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Predicting...</span>
            ) : (
              <span className="flex items-center gap-2"><Activity className="w-4 h-4" />Run Prediction</span>
            )}
          </button>
        </div>
      </ScrollReveal>

      {result && (
        <ScrollReveal>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-elevated p-5 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Win Probability</p>
                <div className="relative w-28 h-28 mx-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${result.win * 2.64} ${264 - result.win * 2.64}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{result.win}%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{party} in {constituency}</p>
              </div>

              <div className="card-elevated p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Key Factors</p>
                <div className="flex flex-wrap gap-1.5">
                  {result.factors.map((f) => (
                    <span key={f} className="px-2.5 py-1 text-[11px] font-medium bg-secondary rounded-md">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-india-green" />
                  <span>Confidence interval: {result.confidence}% ± 4%</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Based on historical data & sentiment analysis</span>
                </div>
              </div>
            </div>

            <div className="card-elevated p-4">
              <h3 className="text-sm font-semibold mb-3">Party Comparison — {constituency}</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={comparisonData} layout="vertical" margin={{ left: 10, right: 20 }}>
                  <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={50} />
                  <Tooltip />
                  <Bar dataKey="probability" radius={[0, 4, 4, 0]} barSize={18}>
                    {comparisonData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

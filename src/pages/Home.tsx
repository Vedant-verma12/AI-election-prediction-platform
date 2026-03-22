import { ScrollReveal } from "@/components/ScrollReveal";
import { partyData, historicalData, sentimentData } from "@/utils/mockData";
import { TrendingUp, Users, BarChart3, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend, Cell, PieChart, Pie,
} from "recharts";

const overviewCards = [
  { label: "Predicted Winner", value: "NDA", sub: "282 seats projected", icon: TrendingUp, trend: "+12", up: true, accent: "saffron" },
  { label: "Total Seats", value: "543", sub: "Lok Sabha", icon: BarChart3, trend: null, up: true, accent: "navy" },
  { label: "Voter Turnout", value: "68.4%", sub: "Est. participation", icon: Users, trend: "+2.1%", up: true, accent: "india-green" },
  { label: "Confidence Score", value: "87%", sub: "Model accuracy", icon: Activity, trend: "-1.3%", up: false, accent: "chakra-blue" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="bg-popover border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="font-medium text-popover-foreground">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }} className="text-xs">
          {p.dataKey}: {p.value}
        </p>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="container py-6 space-y-6">
      {/* Tricolor accent line */}
      <div className="h-0.5 w-full rounded-full overflow-hidden flex">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-background" />
        <div className="flex-1 bg-india-green" />
      </div>

      {/* Header */}
      <ScrollReveal>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Election Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">AI-powered predictions for Indian elections · Updated March 2026</p>
        </div>
      </ScrollReveal>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((card, i) => (
          <ScrollReveal key={card.label} delay={i * 0.08}>
            <div className="card-elevated p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{card.label}</span>
                <card.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight">{card.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{card.sub}</p>
              </div>
              {card.trend && (
                <div className={`flex items-center gap-1 text-xs font-medium ${card.up ? "text-india-green" : "text-destructive"}`}>
                  {card.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {card.trend} from last poll
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ScrollReveal>
          <div className="card-elevated p-4">
            <h2 className="text-sm font-semibold mb-4">Seat Distribution Prediction</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={partyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="short" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="seats" radius={[4, 4, 0, 0]}>
                  {partyData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="card-elevated p-4">
            <h2 className="text-sm font-semibold mb-4">Historical Trends (Lok Sabha)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={historicalData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="BJP" stroke="hsl(24, 90%, 52%)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="INC" stroke="hsl(140, 55%, 38%)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="Others" stroke="hsl(220, 10%, 55%)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom row: Pie + Sentiment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ScrollReveal>
          <div className="card-elevated p-4">
            <h2 className="text-sm font-semibold mb-4">Seat Share</h2>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={partyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="seats"
                >
                  {partyData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {partyData.map((p) => (
                <span key={p.name} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-2">
          <div className="card-elevated p-4">
            <h2 className="text-sm font-semibold mb-4">Sentiment Analysis</h2>
            <div className="space-y-3">
              {sentimentData.map((s) => (
                <div key={s.party} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium">{s.party}</span>
                    <span className="text-muted-foreground">{s.positive}% positive</span>
                  </div>
                  <div className="h-2 flex rounded-full overflow-hidden bg-muted">
                    <div className="bg-india-green transition-all" style={{ width: `${s.positive}%` }} />
                    <div className="bg-muted-foreground/30 transition-all" style={{ width: `${s.neutral}%` }} />
                    <div className="bg-destructive transition-all" style={{ width: `${s.negative}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-india-green" />Positive</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-muted-foreground/30" />Neutral</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive" />Negative</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

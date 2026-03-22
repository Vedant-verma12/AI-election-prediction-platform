import { ScrollReveal } from "@/components/ScrollReveal";
import { leaders } from "@/utils/mockData";
import { Star, MapPin, Award } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partyColors: Record<string, string> = {
  BJP: "bg-saffron-light text-saffron",
  INC: "bg-india-green-light text-india-green",
  AAP: "bg-info/10 text-info",
  TMC: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  DMK: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  SP: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
};

export default function Leaders() {
  const [selected, setSelected] = useState<typeof leaders[0] | null>(null);

  return (
    <div className="container py-6 space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold tracking-tight">Leader Profiles</h1>
        <p className="text-muted-foreground text-sm mt-1">Key political figures and their popularity metrics</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {leaders.map((leader, i) => (
          <ScrollReveal key={leader.id} delay={i * 0.06}>
            <div
              onClick={() => setSelected(leader)}
              className="card-elevated p-4 cursor-pointer group hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-14 h-14 rounded-lg object-cover ring-2 ring-border group-hover:ring-accent/50 transition-all"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{leader.name}</h3>
                  <span className={`inline-block px-1.5 py-0.5 text-[10px] font-medium rounded mt-0.5 ${partyColors[leader.party] || "bg-secondary text-secondary-foreground"}`}>
                    {leader.party}
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{leader.constituency}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Award className="w-3 h-3" />
                  <span className="truncate">{leader.role}</span>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Popularity</span>
                  <span className="font-medium flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-saffron fill-saffron" />
                    {leader.popularity}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${leader.popularity}%` }} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="card-elevated p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4">
                <img src={selected.image} alt={selected.name} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <h2 className="text-lg font-bold">{selected.name}</h2>
                  <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded mt-1 ${partyColors[selected.party] || "bg-secondary text-secondary-foreground"}`}>
                    {selected.party}
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Constituency</span><span className="font-medium">{selected.constituency}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Role</span><span className="font-medium">{selected.role}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Popularity</span><span className="font-medium">{selected.popularity}%</span></div>
              </div>
              <button onClick={() => setSelected(null)} className="mt-4 w-full py-2 text-sm font-medium bg-secondary rounded-lg hover:bg-secondary/80 transition-colors active:scale-[0.97]">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

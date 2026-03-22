import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useCallback, useEffect, useRef } from "react";
import { MapPin, Info, ChevronRight, X, Users, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IndiaMap } from "@vishalvoid/react-india-map";
import { statesData, statesMap, partyColors, type StateInfo } from "@/data/indiaStatesData";

function useStateStyles() {
  useEffect(() => {
    const styleId = "india-map-party-colors";
    if (document.getElementById(styleId)) return;

    const rules = statesData.map((s) => {
      const color = partyColors[s.partyAbbr]?.fill ?? partyColors.NONE.fill;
      return `
        svg path[id="${s.id}"],
        svg path[title="${s.name}"] {
          fill: ${color} !important;
          transition: fill 0.25s ease, opacity 0.25s ease, filter 0.25s ease;
          cursor: pointer;
        }
        svg path[id="${s.id}"]:hover,
        svg path[title="${s.name}"]:hover {
          filter: brightness(1.2) drop-shadow(0 0 6px ${color});
          opacity: 0.85;
        }
      `;
    }).join("\n");

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .india-map-wrapper svg {
        width: 100% !important;
        height: auto !important;
        max-height: 100% !important;
        display: block;
      }
      .india-map-wrapper svg path {
        stroke: hsl(var(--background));
        stroke-width: 0.8;
      }
      ${rules}
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById(styleId)?.remove();
    };
  }, []);
}

export default function MapPage() {
  const [selected, setSelected] = useState<StateInfo | null>(null);
  const [hovered, setHovered] = useState<StateInfo | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPanel, setShowPanel] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useStateStyles();

  const handleStateClick = useCallback((_stateId: string, stateInfo?: any) => {
    const id = stateInfo?.id || _stateId;
    const state = statesMap.get(id);
    if (state) {
      setSelected(state);
      setShowPanel(true);
    }
  }, []);

  const handleStateHover = useCallback((_stateId: string, stateInfo?: any) => {
    const id = stateInfo?.id || _stateId;
    const state = statesMap.get(id);
    setHovered(state ?? null);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  const partyColorDot = (abbr: string) => {
    const color = partyColors[abbr]?.fill ?? partyColors.NONE.fill;
    return (
      <span
        className="inline-block w-3 h-3 rounded-full ring-1 ring-background shadow-sm shrink-0"
        style={{ backgroundColor: color }}
      />
    );
  };

  const legendParties = Array.from(
    new Set(statesData.map((s) => s.partyAbbr))
  ).filter((p) => partyColors[p]);

  return (
    <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6">
      <ScrollReveal>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Political Map of India</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
          Explore the ruling party landscape across all states and union territories
        </p>
      </ScrollReveal>

      {/* Legend - shown above map on mobile for context */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] sm:text-[11px] text-muted-foreground">
        {legendParties.map((abbr) => (
          <span key={abbr} className="flex items-center gap-1">
            <span
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: partyColors[abbr].fill }}
            />
            {abbr}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="card-elevated p-2 sm:p-4 relative overflow-hidden">
            <div
              ref={mapRef}
              className="india-map-wrapper relative w-full flex items-center justify-center"
              style={{ aspectRatio: "3 / 3.5" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHovered(null)}
            >
              <IndiaMap
                mapStyle={{
                  backgroundColor: "transparent",
                  hoverColor: "transparent",
                  stroke: "currentColor",
                  strokeWidth: 0.6,
                }}
                stateData={statesData.map((s) => ({
                  id: s.id,
                  customData: { ...s },
                }))}
                onStateClick={handleStateClick}
                onStateHover={handleStateHover}
              />
            </div>

            {/* Floating Tooltip on Hover - hidden on touch devices */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute z-30 rounded-lg border bg-popover text-popover-foreground shadow-lg p-2.5 sm:p-3 min-w-[180px] sm:min-w-[200px] hidden sm:block"
                  style={{
                    left: Math.min(mousePos.x + 16, (mapRef.current?.clientWidth ?? 500) - 220),
                    top: Math.max(mousePos.y - 10, 10),
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {partyColorDot(hovered.partyAbbr)}
                    <span className="font-semibold text-xs sm:text-sm">{hovered.name}</span>
                  </div>
                  <div className="space-y-1 text-[10px] sm:text-xs text-muted-foreground">
                    <p className="flex items-center gap-1.5">
                      <Landmark className="w-3 h-3 shrink-0" />
                      <span className="font-medium text-foreground">{hovered.rulingParty}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Users className="w-3 h-3 shrink-0" />
                      CM: <span className="font-medium text-foreground">{hovered.chiefMinister}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      Seats: <span className="font-medium text-foreground">{hovered.seats}</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Side Panel - full width on mobile */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold flex items-center gap-1.5">
            <Info className="w-4 h-4" />
            {selected ? selected.name : "Select a State"}
          </h2>

          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="card-elevated p-3 sm:p-4 space-y-3 relative"
              >
                <button
                  onClick={() => { setSelected(null); setShowPanel(false); }}
                  className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shrink-0"
                    style={{ backgroundColor: partyColors[selected.partyAbbr]?.fill ?? partyColors.NONE.fill }}
                  >
                    {selected.partyAbbr}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">{selected.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{selected.type} • {selected.capital}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  {[
                    ["Ruling Party", selected.rulingParty],
                    ["Chief Minister", selected.chiefMinister],
                    ["Predicted 2029", selected.predicted],
                    ["Lok Sabha Seats", String(selected.seats)],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-xs shrink-0">{label}</span>
                      <span className="font-medium text-xs text-right truncate">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-muted-foreground"
              >
                Click on any state on the map to view detailed political information.
              </motion.p>
            )}
          </AnimatePresence>

          {/* States / UTs List */}
          <h2 className="text-sm font-semibold mt-4">All States & UTs</h2>
          <div className="space-y-1 max-h-[280px] sm:max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
            {statesData.map((s) => (
              <button
                key={s.id}
                onClick={() => { setSelected(s); setShowPanel(true); }}
                className={`w-full flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs rounded-md transition-colors active:scale-[0.98] ${
                  selected?.id === s.id ? "bg-secondary" : "hover:bg-secondary/50"
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: partyColors[s.partyAbbr]?.fill ?? partyColors.NONE.fill }}
                  />
                  <span className="font-medium truncate">{s.name}</span>
                  <span className="text-muted-foreground shrink-0">({s.partyAbbr})</span>
                </span>
                <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { newsItems } from "@/utils/mockData";
import { Search, Calendar, ExternalLink } from "lucide-react";

const categories = ["All", "National", "State", "Economy", "Elections"];

export default function News() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = newsItems.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || n.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-6 space-y-6">
      <ScrollReveal>
        <h1 className="text-2xl font-bold tracking-tight">Political News</h1>
        <p className="text-muted-foreground text-sm mt-1">Stay updated with the latest political developments</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors active:scale-[0.97] ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.06}>
            <article className="card-elevated overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="px-2 py-0.5 bg-secondary rounded-md font-medium">{item.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug line-clamp-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                <button className="flex items-center gap-1 text-xs font-medium text-chakra-blue hover:underline mt-1 active:scale-[0.97]">
                  Read more <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-sm">No news found matching your criteria.</p>
          <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="text-xs text-chakra-blue mt-2 hover:underline">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

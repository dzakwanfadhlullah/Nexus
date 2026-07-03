"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { showcaseFilters } from "@/data/site";
import type { ShowcaseItem } from "@/types/content";
import { formatType } from "@/lib/content";
import { ShowcaseCard } from "@/components/showcase/ShowcaseCard";

type Filters = {
  type: string;
  industry: string;
  style: string;
  goal: string;
};

const emptyFilters: Filters = { type: "", industry: "", style: "", goal: "" };

export function ShowcaseExplorer({
  items,
  initialQuery = "",
}: {
  items: ShowcaseItem[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const searchable = [
        item.title,
        item.subtitle,
        item.description,
        formatType(item.type),
        ...item.industry,
        ...item.style,
        ...item.goal,
        ...item.features,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalized || searchable.includes(normalized)) &&
        (!filters.type || formatType(item.type) === filters.type) &&
        (!filters.industry || item.industry.includes(filters.industry)) &&
        (!filters.style || item.style.includes(filters.style)) &&
        (!filters.goal || item.goal.includes(filters.goal))
      );
    });
  }, [filters, items, query]);

  const hasFilters = query || Object.values(filters).some(Boolean);

  return (
    <>
      <div className="filter-shell">
        <div className="search-row">
          <label style={{ position: "relative", flex: 1 }}>
            <span className="sr-only">Cari showcase</span>
            <Search
              size={18}
              aria-hidden="true"
              style={{ position: "absolute", top: 17, left: 17, color: "var(--muted)" }}
            />
            <input
              className="search-input"
              style={{ paddingLeft: 48 }}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari travel, florist, dashboard, minimal..."
            />
          </label>
          {hasFilters && (
            <button
              className="button button-light"
              type="button"
              onClick={() => {
                setQuery("");
                setFilters(emptyFilters);
              }}
            >
              <X size={16} /> Reset
            </button>
          )}
        </div>

        <div className="filter-row" aria-label="Filter showcase">
          {(
            [
              ["type", "Type", showcaseFilters.type],
              ["industry", "Industry", showcaseFilters.industry],
              ["style", "Style", showcaseFilters.style],
              ["goal", "Goal", showcaseFilters.goal],
            ] as const
          ).map(([key, label, options]) => (
            <label key={key}>
              <span className="sr-only">{label}</span>
              <select
                className="filter-select"
                value={filters[key]}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, [key]: event.target.value }))
                }
              >
                <option value="">{label}: All</option>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="result-meta" aria-live="polite">
          <span>
            <SlidersHorizontal size={14} style={{ display: "inline", marginRight: 7 }} />
            {results.length} arah ditemukan
          </span>
          <span>Featured first</span>
        </div>
      </div>

      <div className="showcase-grid">
        {results.length ? (
          results.map((item, index) => (
            <ShowcaseCard item={item} priority={index < 3} key={item.slug} />
          ))
        ) : (
          <div className="empty-state">
            <h2 className="card-title">Belum ada showcase yang cocok.</h2>
            <p>Coba kata kunci lain atau hapus beberapa filter.</p>
            <button
              className="button button-dark"
              type="button"
              onClick={() => {
                setQuery("");
                setFilters(emptyFilters);
              }}
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </>
  );
}

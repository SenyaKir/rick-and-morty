export default function FilterBar({ filter, setFilter }: { filter: string; setFilter: (filter: string) => void }) {
  return (
      <div className="filter-bar">
        <div className={`filter-btn ${filter === "all" && "filter-btn--active"}`}
          onClick={() => setFilter("all")}
        >
          All
        </div>
        <div className={`filter-btn ${filter === "alive" && "filter-btn--active"}`}
          onClick={() => setFilter("alive")}
        >
          Alive
        </div>
        <div className={`filter-btn ${filter === "dead" && "filter-btn--active"}`}
          onClick={() => setFilter("dead")}
        >
          Dead
        </div>
        <div className={`filter-btn ${filter === "unknown" && "filter-btn--active"}`}
          onClick={() => setFilter("unknown")}
        >
          Unknown
        </div>
      </div>
  );
}
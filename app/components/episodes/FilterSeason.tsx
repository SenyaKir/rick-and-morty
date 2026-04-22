type Props = {
  seasons: string[];
  activeSeason: string;
  setActiveSeason: (season: string) => void;
};

export default function FilterSeason({seasons, activeSeason, setActiveSeason}: Props) {
  return (
    <div className="filter-bar">
      {seasons.map((season) => (
        <div key={season} className={`filter-btn ${activeSeason === season && "filter-btn--active"}`}
          onClick={() => setActiveSeason(season)}
        >
          Season {parseInt(season.slice(1, 3))}
        </div>
      ))}
    </div>
  );
}
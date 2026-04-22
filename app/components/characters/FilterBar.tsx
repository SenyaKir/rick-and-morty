type Props = {
  filter: string;
  setFilter: (filter: string) => void;
};

export default function FilterBar({ filter, setFilter }: Props) {
  const statuses = ['all', 'alive', 'dead', 'unknown'];

  return (
    <div className="filter-bar">
      {statuses.map((status) => (
        <div key={status} className={`filter-btn ${filter === status && "filter-btn--active"}`}
          onClick={() => setFilter(status)}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      ))}
    </div>
  );
}
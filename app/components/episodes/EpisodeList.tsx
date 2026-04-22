'use client';

import { useState } from "react";
import { Episode } from "../../types/episode";
import FilterSeason from "./FilterSeason";
import Link from "next/link";

export default function EpisodeList({episodes}:{episodes: Episode[]}) {
  const seasons: string[] = [...new Set(episodes.map((episode) => episode.episode.slice(0, 3)))];
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  const filteredEpisodes: Episode[] = episodes.filter((episode) => {
    if (!activeSeason) return true;
    return episode.episode.startsWith(activeSeason);
  });

  return (
  <div className="episodes-page">
    <FilterSeason
      seasons={seasons} 
      activeSeason={activeSeason} 
      setActiveSeason={setActiveSeason} 
    />

    {filteredEpisodes.map((episode) => (
      <Link 
        key={episode.id} 
        href={`/episode/${episode.id}`}
        className="episodes-page__item"
      >
        <div className="episodes-page__header">
          <p className="episodes-page__episode">{episode.episode}</p>
          <h2 className="episodes-page__name">{episode.name}</h2>
        </div>
        <p className="episodes-page__air-date">{episode.air_date}</p>
      </Link>
    ))}
  </div>
  );
}
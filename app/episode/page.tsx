import Link from "next/link"
import { getEpisodes } from "../lib/api"
import { Episode } from "../types/episode"

export default async function Episodes() {
  const episodes: Episode[] = await getEpisodes()
  
  return (
    <div className="episodes-page">
      {episodes.map((episode) => (
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
  )
}
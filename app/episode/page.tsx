import { getEpisodes } from "../lib/api"
import { Episode } from "../types/episode"
import EpisodeList from "../components/episodes/EpisodeList"

export default async function Episodes() {
  const episodes: Episode[] = await getEpisodes()
  
  return (    
    <EpisodeList episodes={episodes} />
  )
}
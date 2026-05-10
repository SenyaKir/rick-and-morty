import { getAllEpisodes } from "../lib/api"
import EpisodeList from "../components/episodes/EpisodeList"

export default async function Episodes() {
  const episodes = await getAllEpisodes()
  return (
    <EpisodeList episodes={episodes} />
  )
}
import { getAllEpisodes } from "../lib/api"
import EpisodeList from "../components/episodes/EpisodeList"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Episodes | Rick & Morty',
  description: 'Browse all episodes from the Rick and Morty series',
}

export default async function Episodes() {
  const episodes = await getAllEpisodes()
  return (
    <EpisodeList episodes={episodes} />
  )
}
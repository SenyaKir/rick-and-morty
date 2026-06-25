import CharacterList from "../components/characters/CharacterList"
import { getCharacters } from "../lib/api"
import Pagination from "../components/Pagination"
import FilterBar from "../components/characters/FilterBar"
import SearchBar from "../components/characters/SearchBar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Characters | Rick & Morty',
  description: 'Browse all characters from the Rick and Morty universe',
}

type Props = {
  searchParams: Promise<{ page?: string, status?: string, name?: string }>
}

export default async function Characters({ searchParams }: Props) {
  const { page, status, name } = await searchParams
  const { characters, info } = await getCharacters(Number(page) || 1, status, name)

  return (
    <div className="characters-page">
      <SearchBar />
      <FilterBar />
      <CharacterList characters={characters} />
      {info.pages > 0
        ? <Pagination currentPage={Number(page) || 1} totalPages={info.pages} />
        : <p className="no-results">Nothing found 👽</p>
      }
    </div>
  )
}
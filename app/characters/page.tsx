import CharacterList from "../components/characters/CharacterList"
import { getCharacters } from "../lib/api"
import Pagination from "../components/Pagination"
import FilterBar from "../components/characters/FilterBar"

type Props = {
  searchParams: Promise<{ page?: string, status?: string }>
}

export default async function Characters({ searchParams }: Props) {
  const { page, status } = await searchParams
  const { characters, info } = await getCharacters(Number(page) || 1, status)

  return (
    <div className="characters-page">
      <FilterBar />
      <CharacterList characters={characters} />
      <Pagination currentPage={Number(page) || 1} totalPages={info.pages} />
    </div>
  )
}
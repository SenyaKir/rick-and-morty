import CharacterCard from "../components/CharacterCard"
import { getCharacters } from "../lib/api"
import { Character } from "../types/character"


export default async function Characters() {
  const characters = await getCharacters()

  return (
    <div className="characters-page">

      <div className="filter-bar">
        <div className="filter-btn filter-btn--active">All</div>
        <div className="filter-btn">Alive</div>
        <div className="filter-btn">Dead</div>
        <div className="filter-btn">Unknown</div>
      </div>

      <ul className="characters-grid">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id}
            character={character}
          />
        ))}
      </ul>
    </div>
  )
}
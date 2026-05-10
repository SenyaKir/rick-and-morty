import { Character } from "../../types/character"
import CharacterCard from "./CharacterCard"

export default function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <ul className="characters-grid">
      {characters.map((character: Character, index: number) => (
        <CharacterCard key={character.id} character={character} index={index} />
      ))}
    </ul>
  )
}
import CharacterList from "../components/characters/CharacterList"
import { getCharacters } from "../lib/api"


export default async function Characters() {
  const characters = await getCharacters()

  return (
    <CharacterList characters={characters} />
  )
}
export async function getCharacters() {
  const data = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  return characters.results
}

export async function getCharactersById(id: string) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await data.json()
  return character
}

export async function getCharactersByIds(ids: string[]) {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`)
  const character = await data.json()
  return character
}

export async function getLocations() {
  const data = await fetch('https://rickandmortyapi.com/api/location')
  const locations = await data.json()
  return locations.results
}

export async function getEpisodes() {
  const data = await fetch('https://rickandmortyapi.com/api/episode')
  const episodes = await data.json()
  return episodes.results
}

export async function getEpisodesById(id: string) {
  const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
  const episode = await data.json()
  return episode
}
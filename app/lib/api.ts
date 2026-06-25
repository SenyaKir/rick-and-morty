import { Character } from '@/app/types/character'

const BASE_URL = 'https://rickandmortyapi.com/api'

async function fetcher(url: string) {
  const data = await fetch(url, { next: { revalidate: 3600 } })
  if (!data.ok) {
    throw new Error(`Failed to fetch: ${url}`)
  }
  return data.json()
}

export async function getCharacters(page: number = 1, status?: string, name?: string) {
  const params = new URLSearchParams()
  params.append('page', String(page))
  if (status) params.append('status', status)
  if (name) params.append('name', name)

  // API повертає 404 якщо нічого не знайдено — обробляємо це gracefully
  try {
    const json = await fetcher(`${BASE_URL}/character?${params}`)
    return { characters: json.results as Character[], info: json.info }
  } catch {
    return { characters: [], info: { count: 0, pages: 0, next: null, prev: null } }
  }
}

export async function getCharactersById(id: string) {
  return fetcher(`${BASE_URL}/character/${id}`)
}

export async function getCharactersByIds(ids: string[]) {
  const json = await fetcher(`${BASE_URL}/character/${ids.join(',')}`)
  return Array.isArray(json) ? json : [json]
}

export async function getAllLocations() {
  const first = await fetcher(`${BASE_URL}/location`)
  const pages = await Promise.all(
    Array.from({ length: first.info.pages }, (_, i) =>
      fetcher(`${BASE_URL}/location?page=${i + 1}`)
    )
  )
  return pages.flatMap((page) => page.results)
}

export async function getLocations(page: number = 1, type?: string) {
  const params = new URLSearchParams()
  params.append('page', String(page))
  if (type) {
    params.append('type', type)
  }

  const json = await fetcher(`${BASE_URL}/location?${params}`)
  return { locations: json.results, info: json.info }
}

export async function getLocationsById(id: string) {
  return fetcher(`${BASE_URL}/location/${id}`)
}

export async function getAllEpisodes() {
  const first = await fetcher(`${BASE_URL}/episode`)
  const pages = await Promise.all(
    Array.from({ length: first.info.pages }, (_, i) =>
      fetcher(`${BASE_URL}/episode?page=${i + 1}`)
    )
  )
  return pages.flatMap((page) => page.results)
}

export async function getEpisodesById(id: string) {
  return fetcher(`${BASE_URL}/episode/${id}`)
}
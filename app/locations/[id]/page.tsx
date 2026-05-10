import { getLocationsById, getCharactersByIds } from "@/app/lib/api"
import { Character } from "@/app/types/character"
import Link from "next/link"
import LocationResidents from "@/app/components/locations/LocationResidents"

export default async function Location({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const location = await getLocationsById(id)
  
  const ids = location.residents
  .map((url: string) => url.split('/').pop())
  .filter(Boolean) as string[]
  
  const characters: Character[] = ids.length > 0 
  ? await getCharactersByIds(ids) 
  : []

  return (
    <div className="location-detail-page">
      <div className="episode-detail__header">
        <h1>{location.name}</h1>
        <Link href="/locations" className="episode-detail__header-back">
          Back to locations
        </Link>
      </div>

      {characters.length > 0 ? (
        <LocationResidents characters={characters} />
      ) : (
        <p>No residents found</p>
      )}
    </div>
  )
}
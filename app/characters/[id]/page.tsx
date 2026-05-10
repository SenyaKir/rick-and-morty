import BackButton from "@/app/components/BackButton"
import { getCharactersById } from "@/app/lib/api"
import Image from "next/image"

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const character = await getCharactersById(id)

  return (
    <div className="character-detail-page">
      <BackButton />

      <h1 className="character-detail__name">{character.name}</h1>

      <div>
        <Image
          src={character.image}
          alt={character.name}
          width={400}
          height={500}
          className="character-detail__image"
        />

        <div className="character-detail__badge">{character.status}</div>

        <div className="character-detail__info">
          <div className="detail-row">
            <span className="detail-label">Gender: </span>
            <span className="detail-value">{character.gender}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Species: </span>
            <span className="detail-value">{character.species}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Origin: </span>
            <span className="detail-value">{character.origin.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location: </span>
            <span className="detail-value">{character.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
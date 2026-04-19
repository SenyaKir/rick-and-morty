import Image from 'next/image'
import { Character } from '../types/character'

type CharacterCardProps = {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="character-card">
      <div className="char-card__image">
        <Image src={character.image} alt={character.name} width={258} height={258} />
      </div>
      <div className="char-card__info">
        <h2 className='char-card__name' title={character.name}>
          {character.name}
        </h2>

        <div className="char-card__detail">
          <span className="detail-label">Species:</span>
          <span className="detail-value">{character.species}</span>
        </div>

        <div className="char-card__detail">
          <span className="detail-label">Location:</span>
          <span className="detail-value" title={character.location.name}>
            {character.location.name}
          </span>
        </div>
      </div>
    </div>
  )
}
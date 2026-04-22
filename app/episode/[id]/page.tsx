import CharacterCard from "@/app/components/characters/CharacterCard";
import { getCharactersByIds, getEpisodesById } from "@/app/lib/api";
import { Character } from "@/app/types/character";
import Link from "next/link";

export default async function Episodes({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const episode = await getEpisodesById(id);
  const ids = episode.characters.map((characterUrl: string) => characterUrl.split('/').pop());
  const characters: Character[] = await getCharactersByIds(ids);
  
  return (
    <div className="episodes-page">
      <div className="episode-detail__header">
        <h1>{episode.name}</h1>
        <p>{episode.air_date}</p>
        <Link 
          href="/episode"
          className="episode-detail__header-back"
        >
          Back to episodes
        </Link>
      </div>
      <div className="characters-grid">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}
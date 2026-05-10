'use client'

import { useState } from "react"
import { Character } from "@/app/types/character"
import CharacterCard from "../characters/CharacterCard"
import ClientPagination from "../ClientPagination"

const PER_PAGE = 8

export default function EpisodeResidents({ characters }: { characters: Character[] }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(characters.length / PER_PAGE)
  const visible = characters.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <>
      <div className="characters-grid">
        {visible.map((character, index) => (
          <CharacterCard key={character.id} character={character} index={index} />
        ))}
      </div>

      <ClientPagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  )
}
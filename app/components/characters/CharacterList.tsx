'use client';

import { useState } from "react";
import { Character } from "../../types/character";
import CharacterCard from "./CharacterCard";
import FilterBar from "./FilterBar";

export default function CharacterList({ characters }: { characters: Character[] }) {
  const [filter, setFilter] = useState("all");

  const filteredCharacters = characters.filter((character) => {
    if (filter === "all") return true;
    return character.status.toLowerCase() === filter;
  });

  return (
    <div className="characters-page">
      <FilterBar filter={filter} setFilter={setFilter} />

      <ul className="characters-grid">
        {filteredCharacters.map((character: Character, index: number) => (
          <CharacterCard key={character.id}
            character={character}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
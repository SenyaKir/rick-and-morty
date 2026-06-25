'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = useState(searchParams.get('name') || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    if (value.trim()) {
      params.set('name', value.trim())
    } else {
      params.delete('name')
    }
    params.delete('page')

    router.push(`/characters?${params}`)
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Search character..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  )
}

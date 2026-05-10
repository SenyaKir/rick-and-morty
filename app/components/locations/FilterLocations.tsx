'use client'

import { useRouter, useSearchParams } from "next/navigation"

type Props = {
  types: string[]
}

export default function FilterLocations({ types }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeType = searchParams.get('type') || 'all'

  const setType = (type: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (type === 'all') {
      params.delete('type')
    } else {
      params.set('type', type)
    }
    params.delete('page')
    router.push(`/locations?${params}`)
  }

  return (
    <select 
      className="filter-select"
      value={activeType}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="all">All types</option>
      {types.map((type) => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  )
}
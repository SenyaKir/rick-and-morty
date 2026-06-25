'use client'

import { useRouter, useSearchParams } from "next/navigation"

export default function FilterBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get('status') || 'all'

  const setFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete('status')
    } else {
      params.set('status', value)
    }
    params.delete('page')
    router.push(`/characters?${params}`)
  }

  return (
    <div className="filter-bar">
      {['all', 'alive', 'dead', 'unknown'].map((s) => (
        <button
          key={s}
          type="button"
          className={`filter-btn ${status === s ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter(s)}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </button>
      ))}
    </div>
  )
}
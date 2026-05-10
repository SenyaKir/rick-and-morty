'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"

type Props = {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const searchParams = useSearchParams()

  const createUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    return `?${params}`
  }

  return (
    <div className="pagination">
      <Link
        href={createUrl(currentPage - 1)}
        className={`pagination-btn ${currentPage === 1 ? 'pagination-btn--disabled' : ''}`}
        aria-disabled={currentPage === 1}
        onClick={(e) => currentPage === 1 && e.preventDefault()}
      >
        Previous
      </Link>
      <span className="pagination-info">
        {currentPage} / {totalPages}
      </span>
      <Link
        href={createUrl(currentPage + 1)}
        className={`pagination-btn ${currentPage === totalPages ? 'pagination-btn--disabled' : ''}`}
        aria-disabled={currentPage === totalPages}
        onClick={(e) => currentPage === totalPages && e.preventDefault()}
      >
        Next
      </Link>
    </div>
  )
}
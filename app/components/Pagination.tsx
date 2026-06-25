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

  // Повертає масив сторінок: [1, '...', 5, 6, 7, 8, 9, '...', 42]
  const getPages = (): (number | '...')[] => {
    const pages: (number | '...')[] = []
    const delta = 2 // кількість сторінок з кожного боку від поточної

    const rangeStart = Math.max(2, currentPage - delta)
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta)

    pages.push(1)

    if (rangeStart > 2) pages.push('...')

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    if (rangeEnd < totalPages - 1) pages.push('...')

    if (totalPages > 1) pages.push(totalPages)

    return pages
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

      {getPages().map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className="pagination-dots">...</span>
        ) : (
          <Link
            key={page}
            href={createUrl(page)}
            className={`pagination-page-btn ${currentPage === page ? 'pagination-page-btn--active' : ''}`}
          >
            {page}
          </Link>
        )
      )}

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
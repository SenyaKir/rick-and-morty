'use client'

type Props = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

export default function ClientPagination({ page, totalPages, setPage }: Props) {
  if (totalPages <= 1) return null

  return (
    <div className="pagination">
      <button
        type="button"
        className={`pagination-btn ${page === 1 ? 'pagination-btn--disabled' : ''}`}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className="pagination-info">{page} / {totalPages}</span>
      <button
        type="button"
        className={`pagination-btn ${page === totalPages ? 'pagination-btn--disabled' : ''}`}
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

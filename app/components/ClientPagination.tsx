type Props = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

export default function ClientPagination({ page, totalPages, setPage }: Props) {
  if (totalPages <= 1) return null

  const handlePage = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pagination">
      <button
        className={`pagination-btn ${page === 1 ? 'pagination-btn--disabled' : ''}`}
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="pagination-info">{page} / {totalPages}</span>
      <button
        className={`pagination-btn ${page === totalPages ? 'pagination-btn--disabled' : ''}`}
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}
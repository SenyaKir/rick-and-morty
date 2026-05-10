'use client'

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="error-page">
      <h2 className="error-title">Something went wrong!</h2>
      <p className="error-message">{error.message}</p>
      <button className="episode-detail__header-back" onClick={reset}>
        Try again
      </button>
    </div>
  )
}
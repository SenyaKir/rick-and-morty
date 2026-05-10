export default function Loading() {
  return (
    <div className="loading-page">
      <div className="loading-portal">
        <div className="loading-ring loading-ring--1"></div>
        <div className="loading-ring loading-ring--2"></div>
        <div className="loading-ring loading-ring--3"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  )
}
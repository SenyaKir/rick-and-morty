import { LocationType } from "@/app/types/location"

export default function LocationCard({ location }: { location: LocationType }) {
  return (
    <div className="location-card">
      <h3 className="location-card__name">{location.name}</h3>
      <div className="location-card__detail">
        <span className="detail-label">Type: </span>
        <span className="location-card__value">{location.type}</span>
      </div>
      <div className="location-card__detail">
        <span className="detail-label">Dimension: </span>
        <span className="location-card__value">{location.dimension}</span>
      </div>
      <div className="location-card__detail">
        <span className="detail-label">Residents: </span>
        <span className="location-card__value">{location.residents.length}</span>
      </div>
    </div>
  )
}
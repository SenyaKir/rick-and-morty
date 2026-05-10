import { LocationType } from "@/app/types/location"
import Link from "next/link"
import LocationCard from "./LocationCard"

export default function LocationList({ locations }: { locations: LocationType[] }) {
  return (
    <div className="locations-grid">
      {locations.map((location) => (
        <Link key={location.id} href={`/locations/${location.id}`}>
          <LocationCard location={location} />
        </Link>
      ))}
    </div>
  )
}
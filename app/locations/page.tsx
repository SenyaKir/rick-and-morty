import FilterLocations from "../components/locations/FilterLocations"
import LocationList from "../components/locations/LocationList"
import Pagination from "../components/Pagination"
import { getLocations, getAllLocations } from "../lib/api"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Locations | Rick & Morty',
  description: 'Browse all locations from the Rick and Morty universe',
}

type Props = {
  searchParams: Promise<{ page?: string, type?: string }>
}

export default async function Locations({ searchParams }: Props) {
  const { page, type } = await searchParams
  const { locations, info } = await getLocations(Number(page) || 1, type)
  const allLocations = await getAllLocations()

  const uniqueTypes = [...new Set(allLocations.map((loc) => loc.type))]

  return (
    <div className="locations-page">
      <FilterLocations types={uniqueTypes} />
      <LocationList locations={locations} />
      <Pagination currentPage={Number(page) || 1} totalPages={info.pages} />
    </div>
  )
}
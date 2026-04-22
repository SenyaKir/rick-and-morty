export type Character = {
  id: number,
  name: string,
  status: "Alive" | "Dead" | "unknown",
  image: string,
  species: string,
  location: {
    name: string
  },
}
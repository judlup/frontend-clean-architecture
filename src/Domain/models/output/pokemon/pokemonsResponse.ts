import PokemonEntity from "../../input/pokemon/pokemmon.entity"

export type PokemonsResponse = {
  count: number
  next: string
  previous: string
  results: PokemonEntity[]
  data: any
}

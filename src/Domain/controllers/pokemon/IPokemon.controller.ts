import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"

export interface IPokemonController {
  getPokemons(): Promise<PokemonsResponse>
}

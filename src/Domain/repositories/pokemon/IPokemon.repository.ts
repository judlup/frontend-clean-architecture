import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"

export interface IPokemonRepository {
  getPokemons(): Promise<PokemonsResponse>
}

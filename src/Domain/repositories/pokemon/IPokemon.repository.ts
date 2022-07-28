import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemonsResponse"

export interface IPokemonRepository {
  getPokemons(): Promise<PokemonsResponse>
}

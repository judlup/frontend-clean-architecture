import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemonsResponse"

export interface IPokemonController {
  getPokemons(): Promise<PokemonsResponse>
}

import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"

export interface IGetPokemonsUseCase {
  execute(): Promise<PokemonsResponse>
}

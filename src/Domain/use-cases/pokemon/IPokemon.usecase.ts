import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemonsResponse"

export interface IGetPokemonsUseCase {
  execute(): Promise<PokemonsResponse>
}

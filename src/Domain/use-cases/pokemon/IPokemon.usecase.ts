import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"

export interface IGetPokemonsUseCase {
  execute(): Promise<IPokemons[]>
}

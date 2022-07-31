import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"

export interface IPokemonController {
  getPokemons(): Promise<IPokemons[]>
}

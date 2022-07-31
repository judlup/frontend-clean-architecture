import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"

export interface IPokemonRepository {
  getPokemons(): Promise<IPokemons[]>
}

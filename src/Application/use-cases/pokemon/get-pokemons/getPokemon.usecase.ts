import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemonsResponse"
import { IPokemonRepository } from "@/Domain/repositories/pokemon/IPokemon.repository"
import { IGetPokemonsUseCase } from "@/Domain/use-cases/pokemon/IPokemon.usecase"

export default class GetPokemonsUseCase implements IGetPokemonsUseCase {
  private pokemonRepository: IPokemonRepository

  constructor(pokemonRepository: IPokemonRepository) {
    this.pokemonRepository = pokemonRepository
  }

  public async execute(): Promise<PokemonsResponse> {
    return this.pokemonRepository.getPokemons()
  }
}

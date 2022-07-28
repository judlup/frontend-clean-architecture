import GetPokemonsUseCase from "@/Application/use-cases/pokemon/get-pokemons/getPokemon.usecase"
import { IPokemonController } from "@/Domain/controllers/pokemon/IPokemon.controller"
import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"
import Http from "@/Infrastructure/http/http"
import PokemonRepository from "@/Infrastructure/repositories/pokemon/pokemon.repository"

const http = new Http()
const repository = new PokemonRepository(http)

export default class PokemonController implements IPokemonController {
  async getPokemons(): Promise<PokemonsResponse> {
    const getPokemonsUseCase = new GetPokemonsUseCase(repository)
    return getPokemonsUseCase.execute()
  }
}

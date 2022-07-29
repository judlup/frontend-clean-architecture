import GetPokemonsUseCase from "@/Application/use-cases/pokemon/get-pokemons/getPokemon.usecase"
import { IPokemonController } from "@/Domain/controllers/pokemon/IPokemon.controller"
import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"
import PokemonRepositoryFake from "@/Infrastructure/repositories/pokemon/pokemon.fake.repository"
import PokemonRepository from "@/Infrastructure/repositories/pokemon/pokemon.repository"
import Http from "@/Infrastructure/utilities/http/http"

const http = new Http()
const repository = new PokemonRepository(http)
const fakeRepository = new PokemonRepositoryFake(http)

export default class PokemonController implements IPokemonController {
  async getPokemons(): Promise<IPokemons[]> {
    const getPokemonsUseCase = new GetPokemonsUseCase(repository)
    return getPokemonsUseCase.execute()
  }
}

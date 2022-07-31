import GetPokemonsUseCase from "@/Application/use-cases/pokemon/get-pokemons/getPokemon.usecase"
import PokemonRepository from "@/Infrastructure/repositories/pokemon/pokemon.repository"
import Http from "@/Infrastructure/utilities/http/http"

describe("Pokemon Usecases", () => {
  describe("Get Pokemons", () => {
    let repository: PokemonRepository
    let httpClient: Http
    beforeEach(() => {
      httpClient = new Http()
      repository = new PokemonRepository(httpClient)
    })
    it("Should get pokemons", async () => {
      const getPokemons = new GetPokemonsUseCase(repository)
      const pokemon = await getPokemons.execute()
      expect(pokemon.length).toBeGreaterThan(0)
    })
  })
})

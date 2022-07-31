import PokemonRepository from "@/Infrastructure/repositories/pokemon/pokemon.repository"
import Http from "@/Infrastructure/utilities/http/http"

describe("PokemonRepository", () => {
  let repository: PokemonRepository

  beforeEach(() => {
    const HttpClient = new Http()
    repository = new PokemonRepository(HttpClient)
  })

  it("should be defined", () => {
    expect(repository).toBeDefined()
  })

  it("should get pokemons", async () => {
    const pokemons = await repository.getPokemons()
    expect(pokemons.length).toBeGreaterThan(0)
  })
})

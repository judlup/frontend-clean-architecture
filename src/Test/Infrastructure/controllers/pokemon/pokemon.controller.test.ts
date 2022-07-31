import { IPokemonController } from "@/Domain/controllers/pokemon/IPokemon.controller"
import PokemonController from "@/Infrastructure/controllers/pokemon/pokemon.controller"

describe("PokemonRepository", () => {
  let controller: IPokemonController

  beforeEach(() => {
    controller = new PokemonController()
  })

  it("should get pokemons", async () => {
    const pokemons = await controller.getPokemons()
    expect(pokemons.length).toBeGreaterThan(0)
  })
})

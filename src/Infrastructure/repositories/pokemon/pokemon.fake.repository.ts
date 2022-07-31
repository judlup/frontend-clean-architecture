import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"
import { IPokemonRepository } from "@/Domain/repositories/pokemon/IPokemon.repository"
import Http from "@/Infrastructure/http/http"

export default class PokemonRepositoryFake implements IPokemonRepository {
  private url = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private readonly http: Http) {}

  public async getPokemons(): Promise<IPokemons[]> {
    const fake: IPokemons[] = [
      {
        name: "bulbasaur_fake",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      { name: "ivysaur_fake", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      {
        name: "venusaur_fake",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        name: "charmander_fake",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "charmeleon_fake",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        name: "charizard_fake",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "squirtle_fake",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        name: "wartortle_fake",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        name: "blastoise_fake",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        name: "caterpie_fake",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
      },
    ]

    return fake
  }
}

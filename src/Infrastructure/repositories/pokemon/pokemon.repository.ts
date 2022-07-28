import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"
import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"
import { IPokemonRepository } from "@/Domain/repositories/pokemon/IPokemon.repository"
import Http from "@/Infrastructure/http/http"

export default class PokemonRepository implements IPokemonRepository {
  private url = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private readonly http: Http) {}

  public async getPokemons(): Promise<PokemonsResponse> {
    return await this.http.get<IPokemons[]>(this.url)
  }
}

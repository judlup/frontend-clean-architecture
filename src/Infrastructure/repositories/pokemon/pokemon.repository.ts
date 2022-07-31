import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"
import { IPokemonRepository } from "@/Domain/repositories/pokemon/IPokemon.repository"
import Http from "@/Infrastructure/utilities/http/http"

export default class PokemonRepository implements IPokemonRepository {
  private url = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private readonly http: Http) {}

  public async getPokemons(): Promise<IPokemons[]> {
    const reponse = await this.http.get<IPokemons[]>(this.url)
    return reponse.data.results
  }
}

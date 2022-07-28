import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"
import PokemonController from "@/Infrastructure/controllers/pokemon/pokemon.controller"
import { useEffect, useState } from "react"
import PokemonsView from "./pokemons.view"

const PokemonsContainer = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse>({
    count: 0,
    results: [],
    next: "",
    previous: "",
    data: [],
  })

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonController = new PokemonController()
      const pokemonsres = await (await pokemonController.getPokemons()).data
      setPokemons(pokemonsres)
    }
    getPokemons()
  }, [])

  return <PokemonsView pokemons={pokemons} />
}

export default PokemonsContainer

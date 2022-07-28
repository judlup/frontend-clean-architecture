import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"
import PokemonController from "@/Infrastructure/controllers/pokemon/pokemon.controller"
import { useEffect, useState } from "react"
import PokemonsView from "./pokemons.view"

const PokemonsContainer = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([
    {
      name: "",
      url: "",
    },
  ])

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonController = new PokemonController()
      const pokemonsres = await await await pokemonController.getPokemons()
      setPokemons(pokemonsres)
    }
    getPokemons()
  }, [])

  return <PokemonsView pokemons={pokemons} />
}

export default PokemonsContainer

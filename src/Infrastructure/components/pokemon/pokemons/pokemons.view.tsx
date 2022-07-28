import { PokemonsResponse } from "@/Domain/models/output/pokemon/pokemons.response"

import styles from "./pokemons.module.scss"

interface IProps {
  pokemons: PokemonsResponse
}

const PokemonsView: React.FC<IProps> = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <h1>
        Pokemons <small>({pokemons.results.length})</small>
      </h1>
      <div className={styles.pokemonListcontainer}>
        {pokemons.results.map((pokemon) => (
          <div className={styles.pokemonList} key={pokemon.name}>
            <span>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonsView

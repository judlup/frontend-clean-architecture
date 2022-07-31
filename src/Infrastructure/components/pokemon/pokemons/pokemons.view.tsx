import { IPokemons } from "@/Domain/interfaces/pokemon/IPokemons"

import styles from "./pokemons.module.scss"

interface IProps {
  pokemons: IPokemons[]
}

const PokemonsView: React.FC<IProps> = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <h1>
        Pokemons <small>({pokemons.length})</small>
      </h1>
      <div className={styles.pokemonListcontainer}>
        {pokemons.map((pokemon) => (
          <div className={styles.pokemonList} key={pokemon.name}>
            <span>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonsView

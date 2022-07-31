import CountContainer from "@/Infrastructure/components/count/count.container"
import PokemonsContainer from "@/Infrastructure/components/pokemon/pokemons/pokemons.container"
import TodosContainer from "@/Infrastructure/components/todo/todos/todos.container"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="ToDo clean architecture example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodosContainer />
      <CountContainer />
      <PokemonsContainer />
    </div>
  )
}

export default Home

import GetTodosContainer from "@/Infrastructure/components/todo/get-todos/getTodos.container"
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
      <GetTodosContainer />
    </div>
  )
}

export default Home

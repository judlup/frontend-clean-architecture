import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import styles from "./getTodos.module.scss"

interface Props {
  todos: ITodo[]
  title: string
  addTodo: () => void
  changeTitle: (e: any) => void
  changeToggle: (id: number) => void
  changeRemove: (id: number) => void
}

const GetTodosView: React.FC<Props> = ({
  todos,
  title,
  addTodo,
  changeTitle,
  changeToggle,
  changeRemove,
}) => {
  return (
    <div className={styles.container}>
      <h1>Get Todos</h1>
      {todos.map((todo: ITodo) => (
        <li key={todo.id}>
          <span onClick={() => changeToggle(todo.id)}>
            {todo.title} - {todo.isDone ? "Done " : "Not Done "}
          </span>
          <button onClick={() => changeRemove(todo.id)}>Remove</button>
        </li>
      ))}
      <input
        type={"text"}
        placeholder={"Title"}
        onChange={changeTitle}
        value={title}
      ></input>
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  )
}

export default GetTodosView

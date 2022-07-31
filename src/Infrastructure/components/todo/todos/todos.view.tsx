import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import styles from "./todos.module.scss"

interface IProps {
  todos: ITodo[]
  title: string
  addTodo: () => void
  changeTitle: (e: any) => void
  changeToggle: (id: number) => void
  changeRemove: (id: number) => void
}

const TodosView: React.FC<IProps> = ({
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
      {todos.length == 0 ? (
        <p>No todos</p>
      ) : (
        todos.map((todo: ITodo) => (
          <li key={todo.id}>
            <span onClick={() => changeToggle(todo.id)}>
              {todo.title} - {todo.isDone ? "Done " : "Not Done "}
            </span>
            <button onClick={() => changeRemove(todo.id)}>Remove</button>
          </li>
        ))
      )}
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

export default TodosView

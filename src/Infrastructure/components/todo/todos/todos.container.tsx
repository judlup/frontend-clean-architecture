import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import TodoController from "@/Infrastructure/controllers/todo/todo.controller"
import { useEffect, useState } from "react"
import TodosView from "./todos.view"

const TodosContainer = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    setTodos(todos)
    async function getTodos() {
      const todos = await TodoController.getTodos()
      setTodos(todos)
    }
    getTodos()
  }, [todos])

  const addTodoFn = async () => {
    const todos = await TodoController.addTodo(title)
    setTodos([...todos])
    setTitle("")
  }

  const changeTitleFn = (e: any) => {
    setTitle(e.target.value)
  }

  const changeToggleFn = async (id: number) => {
    const todos = await TodoController.toggleTodo(id)
    setTodos([...todos])
  }

  const changeRemoveFn = async (id: number) => {
    const todos = await TodoController.removeTodo(id)
    setTodos([...todos])
  }

  return (
    <>
      <TodosView
        todos={todos}
        addTodo={addTodoFn}
        changeTitle={changeTitleFn}
        title={title}
        changeToggle={changeToggleFn}
        changeRemove={changeRemoveFn}
      />
    </>
  )
}

export default TodosContainer

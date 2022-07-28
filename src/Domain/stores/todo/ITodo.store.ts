import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"

export interface ITodoStore {
  todos: ITodo[]
  AddTodo: (title: string) => void
  ToggleTodo: (id: number) => void
  RemoveTodo: (id: number) => void
}

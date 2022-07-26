import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"

export interface ITodoStore {
  todos: ITodo[]
  AddTodo: (title: string) => ITodo[]
  ToggleTodo: (id: number) => ITodo[]
  RemoveTodo: (id: number) => ITodo[]
}

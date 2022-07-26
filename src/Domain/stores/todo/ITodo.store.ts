import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"

export interface ITodoStore {
  todos: TodoEntity[]
  AddTodo: (title: string) => TodoEntity[]
  ToggleTodo: (id: string) => TodoEntity[]
  RemoveTodo: (id: string) => TodoEntity[]
}

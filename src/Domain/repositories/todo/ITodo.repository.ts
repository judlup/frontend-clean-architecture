import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"

export interface ITodoRepository {
  getTodos(): Promise<TodoEntity[]>
  addTodo(title: string): Promise<TodoEntity[]>
  toggleTodo(id: string): Promise<TodoEntity[]>
  removeTodo(id: string): Promise<TodoEntity[]>
}

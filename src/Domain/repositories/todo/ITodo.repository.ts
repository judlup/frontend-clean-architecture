import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"

export interface ITodoRepository {
  getTodos(): Promise<ITodo[]>
  addTodo(title: string): Promise<ITodo[]>
  toggleTodo(id: number): Promise<ITodo[]>
  removeTodo(id: number): Promise<ITodo[]>
}

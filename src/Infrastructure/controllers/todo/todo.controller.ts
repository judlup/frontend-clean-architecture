import { addTodo } from "@/Application/use-cases/todo/add-todo/addTodo.usecase"
import { getTodos } from "@/Application/use-cases/todo/get-todos/geTodos.usecase"
import { removeTodo } from "@/Application/use-cases/todo/remove-todo/removeTodo.usecase"
import { toggleTodo } from "@/Application/use-cases/todo/toggle-todo/toggleTodo.usecase."
import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import TodoRepository from "@/Infrastructure/repositories/todo/todo.repository"

const repository = new TodoRepository()

export default class TodoController {
  static async getTodos(): Promise<ITodo[]> {
    return getTodos(repository)
  }

  static async addTodo(title: string): Promise<ITodo[]> {
    return addTodo(repository, title)
  }

  static async toggleTodo(id: number): Promise<ITodo[]> {
    return toggleTodo(repository, id)
  }

  static async removeTodo(id: number): Promise<ITodo[]> {
    return removeTodo(repository, id)
  }
}

import { AddTodoUseCase } from "@/Application/use-cases/todo/add-todo/addTodo.usecase"
import { GetTodosUseCase } from "@/Application/use-cases/todo/get-todos/geTodos.usecase"
import { RemoveTodoUseCase } from "@/Application/use-cases/todo/remove-todo/removeTodo.usecase"
import { ToggleTodoUseCase } from "@/Application/use-cases/todo/toggle-todo/toggleTodo.usecase."
import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import TodoRepository from "@/Infrastructure/repositories/todo/todo.repository"

const repository = new TodoRepository()

export default class TodoController {
  static async getTodos(): Promise<ITodo[]> {
    const getTodosUseCase = new GetTodosUseCase(repository)
    return getTodosUseCase.execute()
  }

  static async addTodo(title: string): Promise<ITodo[]> {
    const addTodoUseCase = new AddTodoUseCase(repository)
    return addTodoUseCase.execute(title)
  }

  static async toggleTodo(id: number): Promise<ITodo[]> {
    const toggleTodoUseCase = new ToggleTodoUseCase(repository)
    return toggleTodoUseCase.execute(id)
  }

  static async removeTodo(id: number): Promise<ITodo[]> {
    const removeTodoUseCase = new RemoveTodoUseCase(repository)
    return removeTodoUseCase.execute(id)
  }
}

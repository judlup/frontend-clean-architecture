import { AddTodoUseCase } from "@/Application/use-cases/todo/add-todo/addTodo.usecase"
import { GetTodosUseCase } from "@/Application/use-cases/todo/get-todos/geTodos.usecase"
import { RemoveTodoUseCase } from "@/Application/use-cases/todo/remove-todo/removeTodo.usecase"
import { ToggleTodoUseCase } from "@/Application/use-cases/todo/toggle-todo/toggleTodo.usecase."
import { ITodoController } from "@/Domain/controllers/todo/ITodo.controller"
import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import TodoRepository from "@/Infrastructure/repositories/todo/todo.repository"

const repository = new TodoRepository()

export default class TodoController implements ITodoController {
  async getTodos(): Promise<ITodo[]> {
    const getTodosUseCase = new GetTodosUseCase(repository)
    return getTodosUseCase.execute()
  }
  async addTodo(title: string): Promise<ITodo[]> {
    const addTodoUseCase = new AddTodoUseCase(repository)
    return addTodoUseCase.execute(title)
  }
  async toggleTodo(id: number): Promise<ITodo[]> {
    const toggleTodoUseCase = new ToggleTodoUseCase(repository)
    return toggleTodoUseCase.execute(id)
  }
  async removeTodo(id: number): Promise<ITodo[]> {
    const removeTodoUseCase = new RemoveTodoUseCase(repository)
    return removeTodoUseCase.execute(id)
  }
}

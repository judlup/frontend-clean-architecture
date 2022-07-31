import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"
import { IToggleTodoUseCase } from "@/Domain/use-cases/todo/ITodos.usecase"

export class ToggleTodoUseCase implements IToggleTodoUseCase {
  private todoRepository: ITodoRepository

  constructor(_todoRepository: ITodoRepository) {
    this.todoRepository = _todoRepository
  }
  async execute(id: number): Promise<ITodo[]> {
    return this.todoRepository.toggleTodo(id)
  }
}

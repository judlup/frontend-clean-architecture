import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"
import { IGetTodosUseCase } from "@/Domain/use-cases/todo/ITodos.usecase"

export class GetTodosUseCase implements IGetTodosUseCase {
  private todoRepository: ITodoRepository

  constructor(_todoRepository: ITodoRepository) {
    this.todoRepository = _todoRepository
  }
  async execute(): Promise<ITodo[]> {
    return this.todoRepository.getTodos()
  }
}

import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"
import { IRemoveTodoUseCase } from "@/Domain/use-cases/todo/ITodos.usecase"

export class RemoveTodoUseCase implements IRemoveTodoUseCase {
  private todoRepository: ITodoRepository

  constructor(_todoRepository: ITodoRepository) {
    this.todoRepository = _todoRepository
  }
  async execute(id: number): Promise<ITodo[]> {
    return this.todoRepository.removeTodo(id)
  }
}

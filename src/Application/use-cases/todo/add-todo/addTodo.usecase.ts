import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"
import { IAddTodoUseCase } from "@/Domain/use-cases/todo/ITodos.usecase"

export class AddTodoUseCase implements IAddTodoUseCase {
  private todoRepository: ITodoRepository

  constructor(_todoRepository: ITodoRepository) {
    this.todoRepository = _todoRepository
  }
  async execute(title: string): Promise<ITodo[]> {
    return this.todoRepository.addTodo(title)
  }
}

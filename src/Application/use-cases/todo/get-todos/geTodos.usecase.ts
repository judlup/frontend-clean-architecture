import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function getTodos(
  repository: ITodoRepository
): Promise<TodoEntity[]> {
  return await repository.getTodos()
}

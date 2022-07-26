import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function toggleTodo(
  repository: ITodoRepository,
  id: string
): Promise<TodoEntity[]> {
  return await repository.toggleTodo(id)
}

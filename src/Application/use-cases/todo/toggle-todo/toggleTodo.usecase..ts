import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function toggleTodo(
  repository: ITodoRepository,
  id: number
): Promise<ITodo[]> {
  return await repository.toggleTodo(id)
}

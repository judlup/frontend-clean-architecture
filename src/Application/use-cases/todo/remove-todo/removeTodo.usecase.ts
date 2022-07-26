import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function removeTodo(
  repository: ITodoRepository,
  id: number
): Promise<ITodo[]> {
  return await repository.removeTodo(id)
}

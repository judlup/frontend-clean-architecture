import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function addTodo(
  repository: ITodoRepository,
  title: string
): Promise<ITodo[]> {
  return await repository.addTodo(title)
}

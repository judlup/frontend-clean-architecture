import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function getTodos(repository: ITodoRepository): Promise<ITodo[]> {
  return await repository.getTodos()
}

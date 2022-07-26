import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export async function addTodo(
  repository: ITodoRepository,
  title: string
): Promise<TodoEntity[]> {
  return await repository.addTodo(title)
}

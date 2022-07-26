import { TodoEntity } from "@/Domain/models/input/todo/todo.entity"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export interface IgetTodosUseCase {
  execute(repository: ITodoRepository): Promise<TodoEntity[]>
}

export interface IAddTodoUseCase {
  execute(repository: ITodoRepository, title: string): Promise<TodoEntity[]>
}

export interface IToggleTodoUseCase {
  execute(repository: ITodoRepository, id: string): Promise<TodoEntity[]>
}

export interface IRemoveTodoUseCase {
  execute(repository: ITodoRepository, id: string): Promise<TodoEntity[]>
}

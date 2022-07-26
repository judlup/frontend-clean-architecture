import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export interface IgetTodosUseCase {
  execute(repository: ITodoRepository): Promise<ITodo[]>
}

export interface IAddTodoUseCase {
  execute(repository: ITodoRepository, title: string): Promise<ITodo[]>
}

export interface IToggleTodoUseCase {
  execute(repository: ITodoRepository, id: number): Promise<ITodo[]>
}

export interface IRemoveTodoUseCase {
  execute(repository: ITodoRepository, id: number): Promise<ITodo[]>
}

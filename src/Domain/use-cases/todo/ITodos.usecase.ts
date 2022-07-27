import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"

export interface IGetTodosUseCase {
  execute(): Promise<ITodo[]>
}

export interface IAddTodoUseCase {
  execute(title: string): Promise<ITodo[]>
}

export interface IToggleTodoUseCase {
  execute(id: number): Promise<ITodo[]>
}

export interface IRemoveTodoUseCase {
  execute(id: number): Promise<ITodo[]>
}

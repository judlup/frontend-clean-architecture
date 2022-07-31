import { ITodo } from "@/Domain/interfaces/todo/ITodo.interface"
import Todo from "@/Domain/models/input/todo/todo.entity"
import { ITodoRepository } from "@/Domain/repositories/todo/ITodo.repository"

export default class TodoRepository implements ITodoRepository {
  private todos: ITodo[] = []

  public async getTodos(): Promise<ITodo[]> {
    return this.todos
  }

  public async addTodo(title: string): Promise<ITodo[]> {
    const todo = new Todo(this.todos.length + 1, title, false)
    this.todos.push(todo)
    return this.todos
  }

  public async toggleTodo(id: number): Promise<ITodo[]> {
    const todo = this.todos.find((t) => t.id === id)
    if (todo) {
      todo.isDone = !todo.isDone
    }
    return this.todos
  }

  public async removeTodo(id: number): Promise<ITodo[]> {
    this.todos = this.todos.filter((t) => t.id !== id)
    return this.todos
  }
}

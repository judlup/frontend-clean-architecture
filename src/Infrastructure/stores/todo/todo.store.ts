/*
This is just an example of how to use the store, Todo functionality is not implemented based on this.
*/

import { ITodoStore } from "@/Domain/stores/todo/ITodo.store"
import create from "zustand"
import { persist } from "zustand/middleware"

const store = persist<ITodoStore>(
  (set) => ({
    todos: [],
    AddTodo: (title: string) => {
      set((state) => ({
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, title, isDone: false },
        ],
      }))
    },
    ToggleTodo: (id: number) => {
      set((state) => ({
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      }))
    },
    RemoveTodo: (id: number) => {
      set((state) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      }))
    },
  }),

  { name: "todo" }
)

const useTodoStore = create(store)

export { useTodoStore }

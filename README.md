# Frontend(NextJS) Clean Architecture

# ToDo

- [ ] Implement Zustand
- [ ] Improve styles
- [ ] Implement fake repository
- [ ] Implement tests (domain, infrastructure)
- [ ] Implement composed style for shared ui elements
- [ ] Implement helpers
- [ ] Implement localstore
- [ ] Implement http
- [ ] How to implement useCases interfaces

# Structure

```
Domain

- models
  - input
    - todo
      - todo.entity.ts
  - output
    - todo
      - todo.response.ts
- interfaces
  - todo
    - ITodo
- repositories
  - todo
    - ITodo.repository.ts
- use-cases
  - todo
    - ITodos.usecase.ts (dependency injection)
    - Todos.dto.usecase.ts
- controllers
  - todo
    - ITodo.controller.ts
- stores
  - todo
    - ITodo.store.ts
- enums
  - todo
    - ITodo.enum.ts

Application/Use Cases

- use-cases
  - todo
    - add-todo
    - addTodo.usecase.ts
    - get-todos
    - getTodos.usecase.ts
    - remove-todo
    - removeTodo.usecase.ts
    - toggle-todo
    - toggleTodo.usecase.ts

Infrastructure

- repositories
  - todo
    - todo.repository.ts
- controllers
  - todo
    - todo.controller.ts
- components -> based on controller interface [Reference 1]
  - todo
    - get-todos
    - getTodos.container.tsx
    - getTodos.view.tsx
    - getTodos.module.scss
```

[Reference 1](https://github.com/dimitridumont/clean-architecture-front-end/tree/main/src/modules/todos/application/todo-list)

# References

- [Principal Reference](https://github.com/esaraviam/dogappv1)

- [Todo and Container - View Reference](https://github.com/dimitridumont/clean-architecture-front-end)

- [Todo clean architecture typescript](https://codefoundation.co.za/clean-architecture-typescript-and-react)

- ![Flow clean architecture](https://miro.medium.com/max/1400/1*iDwC7At7blypzZPqIAn_PQ.png)

- [Image Reference](https://medium.com/@rostislavdugin/the-clean-architecture-using-react-and-typescript-a832662af803)

# Notes

- NextJS doesn't allow to move the `pages` folder out of `src` or `/` base path.

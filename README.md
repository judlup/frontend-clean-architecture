# Frontend(NextJS) Clean Architecture

# ToDo

- [x] Implement Zustand
- [x] Https client implementation
- [x] Implement fake repository
- [ ] Implement localstore
- [ ] Implement tests (domain, infrastructure)
- [ ] Implement composed style for shared ui elements
- [ ] Implement utilities
- [x] How to implement useCases interfaces

# Structure

```
Domain

- models
  - input
    - pokemon
      - pokemon.entity.ts
    - todo
      - todo.entity.ts
  - output
    - pokemon
      - pokemon.response.ts
    - todo
      - todo.response.ts
- interfaces
  - http
    - IHttp.ts
  - pokemon
    - IPokemons.ts
  - todo
    - ITodo
- repositories
  - pokemon
    - IPokemon.repository.ts
  - todo
    - ITodo.repository.ts
- use-cases
  - pokemon
    - IPokemon.use.case.ts
  - todo
    - ITodos.usecase.ts (dependency injection)
    - Todos.dto.usecase.ts
- controllers
  - pokemon
    - IPokemon.controller.ts
  - todo
    - ITodo.controller.ts
- stores
  - count
    - Icount.store.ts
  - todo
    - ITodo.store.ts
- enums
  - todo
    - ITodo.enum.ts

Application/Use Cases

- use-cases
  - pokemon
    - get-pokemons
      - getPokemon.usecase.ts
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
  - pokemon
    - pokemon.fake.repository.ts
    - pokemon.repository.ts
  - todo
    - todo.repository.ts
- controllers
  - pokemon
    - pokemon.controller.ts
  - todo
    - todo.controller.ts
- http
  - http.ts
- components -> based on controller interface [Reference 1]
  - count
    - count.container.tsx
    - count.view.tsx
    - count.module.scss
  - pokemon
    - pokemons
      - pokemon.container.ts
      - pokemon.view.ts
      - pokemon.module.scss
  - todo
    - todo
    - todos.container.tsx
    - todos.view.tsx
    - todos.module.scss
- stores
  - count
    - count.store.ts
  - todo
    - todo.store.ts
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
- Hydratation error is solved by [this](https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885)

```
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
  if (!mounted) return null
```

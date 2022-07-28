export interface ICountStore {
  count: number
  increment: () => void
  decrement: () => void
  incrementFixed: (value: number) => void
  decrementFixed: (value: number) => void
}

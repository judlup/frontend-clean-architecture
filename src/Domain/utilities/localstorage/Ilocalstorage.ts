export interface ILocalStorage {
  get(key: string): any
  set(key: string, value: any): void
}

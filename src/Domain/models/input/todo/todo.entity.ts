export default class Todo {
  public id: number
  public title: string
  public isDone: boolean

  constructor(id: number, title: string, isDone: boolean) {
    this.id = id
    this.title = title
    this.isDone = isDone
  }
}

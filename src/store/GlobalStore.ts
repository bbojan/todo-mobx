import { action, configure, observable } from 'mobx'
import { addInArrayFast } from '../utils/helper'

configure({ enforceActions: 'observed' })

export class GlobalStore {
  @observable
  dummy: number = 42

  @observable
  todos: string[] = []

  @action
  test(): void {
    this.todos = addInArrayFast(this.todos, ['1', '2', '3'])
  }

  @action
  addTodo(todo: string): void {
    this.todos.push(todo)
  }

  @action
  removeTodo(todo: string): void {
    const index = this.todos.findIndex(t => t === todo)
    if (index > -1) {
      this.todos.splice(index, 1)
    }
  }

  @action
  updateTodo(prevTodo: string, newTodo: string): void {
    const index = this.todos.findIndex(t => t === prevTodo)
    if (index > -1) {
      this.todos[index] = newTodo
    }
  }
}

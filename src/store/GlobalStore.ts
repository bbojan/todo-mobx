import { action, configure, observable } from 'mobx'
import { addInArrayFast } from '../utils/helper'

configure({ enforceActions: 'observed' })

export class GlobalStore {
  @observable
  dummy: number = 42

  @observable
  todos: string[] = []

  @action
  addTodo(): void {
    this.todos = addInArrayFast(this.todos, ['1', '2', '3'])
  }
}

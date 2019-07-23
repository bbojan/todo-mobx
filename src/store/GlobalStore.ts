import { action, configure, observable, computed, runInAction } from 'mobx'
import { addInArrayFast, delayed } from '../utils/helper'
import { TodoItem, newTodoItem } from '../model/models';

configure({ enforceActions: 'observed' })

export class GlobalStore {

  @observable
  filterImportant = false 

  @observable
  todos: TodoItem[] = []
  
  @computed
  get filteredTodos(): TodoItem[]{
    return this.todos.filter(todo => this.filterImportant ? !!todo.important : true)
  }

  constructor(){
    this.todos = [
      { id: -100 , value: 'Todo A', important:false}, 
      { id: -42 , value: 'Todo B', important:true},
      { id: -20 , value: 'Todo C', important:false}, 
      { id: -18 , value: 'Todo E', important:true},
    ]
  }

  @action
  execute(actionHandler:()=>void):void{
    runInAction(()=>{
      actionHandler()
    })
  }
  
  @action
  addTodo(value: string): void {
    this.todos.push(newTodoItem(value))
  }

  @action
  removeTodo(todo: TodoItem): void {
    const index = this.todos.findIndex(t => t === todo)
    if (index > -1) {
      this.todos.splice(index, 1)
    }
  }

  @action
  updateTodo(todo: TodoItem, value: string): void {
    todo.value = value
  }

  @action
  markTodo(todo: TodoItem, important: boolean = true): void {
    todo.important = important
  }

  @action
  async updateTodoLaterAsync(todo: TodoItem, value: string): Promise<void> {
    await delayed(2000)
    runInAction(()=>{
      todo.value = value
    })
  }

  /// start BAD

  @action
  updateTodoLaterAsync_not_good_1(todo: TodoItem, value: string): void {
    delayed(2000).then(action(()=>{
      todo.value = value
    }))
  }

  @action
  updateTodoLaterAsync_bad_2(todo: TodoItem, value: string): void {
    setTimeout(this.updateTodoLaterAsync_bad_2_handler.bind(this,todo, value), 2000);
  }

  @action.bound
  private updateTodoLaterAsync_bad_2_handler(todo: TodoItem, value: string): void {
    todo.value = value
  }

  /// end BAD
}

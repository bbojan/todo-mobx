import { newUID } from '../utils/helper';
import { observable } from 'mobx';

export interface TodoItem {
    id:number
    value:string
    important:boolean
}

export const newTodoItem = (value:string) : TodoItem => ({
    id:newUID(),
    value,
    important:false
})
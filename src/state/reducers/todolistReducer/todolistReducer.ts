import {TodolistType} from '../../../App';
import {v1} from 'uuid';
import {FilterValuesType} from '../../../todolists/Todolists';

type StateType = Array<TodolistType>

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string,
    id: string

}
type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}
type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType


export const todolistReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {

        case 'REMOVE-TODOLIST':{
            return state.filter(tl => tl.id !== action.id)
        }

        case 'ADD-TODOLIST': {
            let newTodolist: TodolistType = {id:action.id, title: action.title, filter: 'all'};
            return [ ...state, newTodolist]
            }

        case 'CHANGE-TODOLIST-FILTER': {
            let todolist = state.find(tl=> tl.id === action.id)
            if(todolist){
                todolist.filter = action.filter}
            return [...state]
        }

        case 'CHANGE-TODOLIST-TITLE': {
            let todolist = state.find(tl=> tl.id === action.id)
            if(todolist){
                todolist.title = action.title}
                return [...state]
            }



        default:
            throw new Error('Error in todolist action type!')
    }
};

export const removeTodolist = (todolistId: string): RemoveTodolistActionType => {return {type: 'REMOVE-TODOLIST', id: todolistId}}
export const addTodolist = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title, id: v1()}
}
export const changeTodolistTitle = (id: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', id, title}
}
export const changeTodolistFilter = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', id, filter}
}
import {FilterValuesType} from '../../todolists/Todolists';
import {TodolistType} from '../../App';
import {v1} from 'uuid';

type StateType = Array<TodolistType>
type ActionType = {
    type: string
    [key: string]: any
}


export const todolistReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {

        case 'REMOVE-TODOLIST':{
            return state.filter(tl => tl.id !== action.id)
        }

        case 'ADD-TODOLIST': {
            let newTodolist: TodolistType = {id:v1(), title: action.title, filter: 'all'};
            return [ ...state, newTodolist]
            }

        case 'CHANGE-TODOLIST-TITLE': {
            let todolist = state.find(tl=> tl.id === action.id)
            if(todolist){
                todolist.title = action.title}
                return [...state]
            }
        case 'CHANGE-TODOLIST-FILTER': {
            let todolist = state.find(tl=> tl.id === action.id)
            if(todolist){
                todolist.filter = action.filter}
            return [...state]
        }


        default:
            throw new Error('Error in action type!')
    }
};
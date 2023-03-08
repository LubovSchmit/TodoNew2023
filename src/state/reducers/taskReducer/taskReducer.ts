import {TasksObjType} from '../../../App';
import {v1} from 'uuid';
import {FilterValuesType} from '../../../todolists/Todolists';


type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string,
    taskId: string
}
type AddTaskActionType = {
    type: 'ADD-TASK',
    todolistId: string,
    title: string
}
type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string,
    taskId: string,
    isDone: boolean

}
type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId: string,
    taskId: string,
    title: string

}
type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType

export const taskReducer = (state: TasksObjType, action: ActionsType): TasksObjType => {
    switch (action.type) {

        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = state[action.todolistId].filter(t => t.id != action.taskId)
            return stateCopy
        }

        case 'ADD-TASK': {
            let newTask = {id: v1(), title: action.title, isDone: false}
            const stateCopy = {...state}
            stateCopy[action.todolistId] = [newTask, ...state[action.todolistId]]

            return stateCopy
        }

        case 'CHANGE-TASK-STATUS': {
            const stateCopy = {...state}
            let todolist = stateCopy[action.todolistId]
            let task = todolist.find(t => t.id == action.taskId)
            if (task) {
                task.isDone = action.isDone
            }
            return stateCopy
        }

        case 'CHANGE-TASK-TITLE': {
            const stateCopy = {...state}
            let todolist = stateCopy[action.todolistId]
            let task = todolist.find(t => t.id == action.taskId)
            if (task) {
                task.title = action.title
            }

            return stateCopy
        }

        default:
            throw new Error('Error in task action type!')
    }
}


export const removeTask = (todolistId: string, taskId: string): RemoveTaskActionType => {
    return {
        type: 'REMOVE-TASK',
        todolistId,
        taskId
    }
}
export const addTask = (todolistId: string, title: string): AddTaskActionType => {
    return {
        type: 'ADD-TASK',
        todolistId,
        title
    }
}
export const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean): ChangeTaskStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        todolistId,
        taskId,
        isDone
    }
}
export const changeTaskTitle = (todolistId: string, taskId: string, title: string): ChangeTaskTitleActionType => {
    return {
        type: 'CHANGE-TASK-TITLE',
        todolistId,
        taskId,
        title
    }
}
import {taskReducer} from '../taskReducer/taskReducer';
import {addTodolist, todolistReducer} from '../todolistReducer/todolistReducer';
import {TasksObjType, TodolistType} from '../../../App';






test('todolistID should be equal', () => {

    const startTasksState: TasksObjType = {};
    const startTodolistsState: Array<TodolistType> = [];

    const action = addTodolist('new todolist')
    const endTasksState = taskReducer(startTasksState, action)
    const endTodolistsState = todolistReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id


    expect(idFromTasks).toBe(action.id)
    expect(idFromTodolists).toBe(action.id)


});

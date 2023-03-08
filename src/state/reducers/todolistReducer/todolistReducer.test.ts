import {
    addTodolist,
    changeTodolistFilter,
    changeTodolistTitle,
    removeTodolist,
    todolistReducer
} from './todolistReducer'
import {v1} from 'uuid';
import {TodolistType} from '../../../App';
import {FilterValuesType} from '../../../todolists/Todolists';




test('remove todolist', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];
    const endState = todolistReducer(startState, removeTodolist(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2)
})

test('add todolist', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTitle = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];
    const endState = todolistReducer(startState, addTodolist(newTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTitle)
    expect(endState[2].filter).toBe('all')
})

test('change todolist filter', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();


    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    let newFilter: FilterValuesType = 'active'
    const endState = todolistReducer(startState, changeTodolistFilter(todolistId1, newFilter))


    expect(endState[0].filter).toBe(newFilter)
    expect(endState[1].filter).toBe('all')
})

test('change todolist title', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTitle = 'New Todolist'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ];

    const endState = todolistReducer(startState, changeTodolistTitle(todolistId2, newTitle))

    expect(endState[1].title).toBe(newTitle)
    expect(endState[0].title).toBe('What to learn')
})

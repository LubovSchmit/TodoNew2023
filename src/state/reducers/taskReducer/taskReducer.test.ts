import {addTask, changeTaskStatus, changeTaskTitle, removeTask, taskReducer} from './taskReducer';
import {TasksObjType} from '../../../App';

const startState: TasksObjType = {
    'todolistId1': [
        {id: '1', title: 'HTML&CSS', isDone: true},
        {id: '2', title: 'JS', isDone: true},
        {id: '3', title: 'ReactJS', isDone: false},
        {id: '4', title: 'Redux', isDone: false}
    ],
    'todolistId2': [
        {id: '1', title: 'Terminator', isDone: true},
        {id: '2', title: 'Film', isDone: true}
    ]
}


test('remove task from correct todolist', () => {

    const endState = taskReducer(startState, removeTask('todolistId1', '2'))

    expect(endState['todolistId1'].length).toBe(3)
    expect(endState['todolistId2'].length).toBe(2)
    expect(endState['todolistId1'].every(t=> t.id != '2')).toBeTruthy()
    expect(endState['todolistId1'][1].id).toBe('3')

});
test('add task to correct todolist', () => {

    const endState = taskReducer(startState, addTask('todolistId1', 'SASS'))

    expect(endState['todolistId1'].length).toBe(5)
    expect(endState['todolistId2'].length).toBe(2)
     expect(endState['todolistId1'][0].title).toBe('SASS')
     expect(endState['todolistId1'][0].id).toBeDefined()

});
test('change task status in correct todolist', () => {

    const endState = taskReducer(startState, changeTaskStatus('todolistId1', '1', false))

    expect(endState['todolistId1'][0].isDone).toBeFalsy()
    expect(endState['todolistId2'][0].isDone).toBeTruthy()


});
test('change task title in correct todolist', () => {

    const endState = taskReducer(startState, changeTaskTitle('todolistId1', '2', 'CSS'))

    expect(endState['todolistId1'][1].title).toBe('CSS')
    expect(endState['todolistId1'][0].title).toBe('HTML&CSS')
    expect(endState['todolistId2'][1].title).toBe('Film')


});

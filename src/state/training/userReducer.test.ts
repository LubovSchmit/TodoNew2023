import {userReducer} from './userReducer'

test('increment age', () => {
    const startState = {age: 37, childrenCount: 2, name: 'Luba'}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})
    expect(endState.age).toBe(38)
    expect(endState.childrenCount).toBe(2)
})


test('increment childrenCount', () => {

    const startState = {age: 37, childrenCount: 2, name: 'Luba'}
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})
    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(37)
})

test('change users name', () => {
    const startState = {age: 37, childrenCount: 2, name: 'Luba'}
    const newName = 'Pierre'
    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName})
    expect(endState.name).toBe(newName)
})
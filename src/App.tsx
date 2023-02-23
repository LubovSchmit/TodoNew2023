import React, {useState} from 'react';
import style from './App.module.scss';
import {FilterValuesType, Todolists} from './todolists/Todolists';
import {v1} from 'uuid';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

let todolistId1 = v1()
let todolistId2 = v1()

function App() {

    let [todolists, setTodolists] = useState<Array<TodolistType>>(
        [
            {id: todolistId1, title: 'What to learn', filter: 'all'},
            {id: todolistId2, title: 'What to watch', filter: 'all'},
        ]
    )


    const changeFilter = (value: FilterValuesType, todolistId: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    const removeTodolist = (todolistId: string) => {
        let filteredTodolists = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(filteredTodolists)

        delete tasksObj[todolistId]
        setTasksObj({...tasksObj})
    }

    let [tasksObj, setTasksObj] = useState({
        [todolistId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: 'Terminator', isDone: true},
            {id: v1(), title: 'Film', isDone: true},
        ],
    });


    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        let tasks = tasksObj[todolistId]
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone

            setTasksObj({...tasksObj})
        }

    }
    const removeTask = (id: string, todolistId: string) => {
        let tasks = tasksObj[todolistId]
        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filteredTasks
        setTasksObj({...tasksObj})
    }
    const addTask = (title: string, todolistId: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let tasks = tasksObj[todolistId]
        let newTasks = [newTask, ...tasks];
        tasksObj[todolistId] = newTasks
        setTasksObj({...tasksObj})
    }


    return (

        <div className={style.app}>
            <Todolists todolists={todolists}
                       tasks={tasksObj}
                       removeTask={removeTask}
                       addTask={addTask}
                       changeTaskStatus={changeTaskStatus}
                       changeFilter={changeFilter}
                       removeTodolist={removeTodolist}
            />
        </div>
    );
}


export default App;

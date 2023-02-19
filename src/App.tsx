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


function App() {

    let [todolists, setTodolists] = useState<Array<TodolistType>>(
        [
            {id: v1(), title: 'What to learn', filter: 'active'},
            {id: v1(), title: 'What to watch', filter: 'completed'},
        ]
    )

    const changeFilter = (value: FilterValuesType, todolistId: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }


    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ]);


    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }
    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    const addTask = (title: string) => {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }


    return (

        <div className={style.app}>
            <Todolists todolists={todolists}
                       tasks={tasks}
                       removeTask={removeTask}
                       addTask={addTask}
                       changeTaskStatus={changeTaskStatus}
                       changeFilter={changeFilter}
            />
        </div>
    );
}


export default App;

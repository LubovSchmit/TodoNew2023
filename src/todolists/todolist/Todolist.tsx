import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolist.module.scss'
import Tasks from './tasks/Tasks';
import {FilterValuesType} from '../Todolists';
import {TaskType} from '../../App';
import {AddItemInputForm} from '../../commun/inputForm/AddItemInputForm';


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTask: (id: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    taskFilter: FilterValuesType
    removeTodolist: (id: string) => void
}

export function Todolist(props: PropsType) {


    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed', props.id)
    }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    return (

        <div className={style.todolist}>

            <div className={style.todolistTitle}>
                <h3>{props.title}</h3>
                <button onClick={removeTodolistHandler}>x</button>
            </div>


            <AddItemInputForm addTask={props.addTask} id={props.id}/>

            <ul>
                <Tasks id={props.id}
                       tasks={props.tasks}
                       removeTask={props.removeTask}
                       changeTaskStatus={props.changeTaskStatus}
                />

            </ul>

            <div>
                <button className={props.taskFilter === 'all' ? style.activeFilter : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.taskFilter === 'active' ? style.activeFilter : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.taskFilter === 'completed' ? style.activeFilter : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>

            </div>

        </div>
    )
}
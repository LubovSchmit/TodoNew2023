import React from 'react';
import style from './Todolists.module.scss'
import {Todolist} from './todolist/Todolist';

import {TaskType, TodolistType} from '../App';


export type FilterValuesType = 'all' | 'completed' | 'active';


type PropsType = {
    todolists: Array<TodolistType>
    tasks: Array<TaskType>
    changeTaskFilter: (value: FilterValuesType) => void
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    taskFilter: FilterValuesType
}

export const Todolists = (props: PropsType) => {


    return (
        <div className={style.todolistsContainer}>

            <h2>My todolists:</h2>

            <div className={style.todolists}>




                {props.todolists.map(tl => <Todolist key={tl.id}
                                                     title={tl.title}
                                                     taskFilter={tl.filter}
                                                     tasks={props.tasks}
                                                     removeTask={props.removeTask}
                                                     changeTaskFilter={props.changeTaskFilter}
                                                     addTask={props.addTask}
                                                     changeTaskStatus={props.changeTaskStatus}
                />)}

            </div>
        </div>
    );
};


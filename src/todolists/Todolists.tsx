import React from 'react';
import style from './Todolists.module.scss'
import {Todolist} from './todolist/Todolist';

import {TaskType, TodolistType} from '../App';


export type FilterValuesType = 'all' | 'completed' | 'active';


type PropsType = {
    todolists: Array<TodolistType>
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void

}

export const Todolists = (props: PropsType) => {



    return (
        <div className={style.todolistsContainer}>

            <h2>My todolists:</h2>

            <div className={style.todolists}>


                {props.todolists.map((tl) => {

                        let tasksForTodolist = props.tasks;

                        if (tl.filter === 'active') {
                            tasksForTodolist = props.tasks.filter(t => !t.isDone)
                        }
                        if (tl.filter === 'completed') {
                            tasksForTodolist = props.tasks.filter(t => t.isDone)
                        }


                        return <Todolist key={tl.id}
                                         id={tl.id}
                                         title={tl.title}
                                         tasks={tasksForTodolist}
                                         removeTask={props.removeTask}
                                         changeFilter={props.changeFilter}
                                         addTask={props.addTask}
                                         changeTaskStatus={props.changeTaskStatus}
                                         taskFilter={tl.filter}
                        />
                    }
                )
                }

            </div>
        </div>
    );
};


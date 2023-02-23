import React from 'react';
import style from './Todolists.module.scss'
import {Todolist} from './todolist/Todolist';

import {TaskType, TodolistType} from '../App';


export type FilterValuesType = 'all' | 'completed' | 'active';


type PropsType = {
    todolists: Array<TodolistType>
    tasks: {[p: string] : TaskType[]}
    removeTask: (id: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTodolist: (id: string)=> void
}

export const Todolists = (props: PropsType) => {


    return (
        <div className={style.todolistsContainer}>

            <h2>My todolists:</h2>

            <div className={style.todolists}>


                {props.todolists.map((tl) => {

                        let tasksForTodolist = props.tasks[tl.id];

                        if (tl.filter === 'active') {
                            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                        }
                        if (tl.filter === 'completed') {
                            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
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
                                         removeTodolist={props.removeTodolist}
                        />
                    }
                )
                }

            </div>
        </div>
    );
};


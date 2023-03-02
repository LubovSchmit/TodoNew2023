import React from 'react';
import style from './Todolists.module.scss'
import {Todolist} from './todolist/Todolist';

import {TasksObjType, TaskType, TodolistType} from '../App';
import {AddItemInputForm} from '../commun/inputForm/AddItemInputForm';
import {Paper} from '@mui/material';


export type FilterValuesType = 'all' | 'completed' | 'active';


type PropsType = {
    todolists: Array<TodolistType>
    tasks: TasksObjType
    removeTask: (id: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTodolist: (id: string) => void
    addTodolist: (title: string) => void
    changeTitleTodolist: (newValue: string, id: string) => void
}

export const Todolists = (props: PropsType) => {


    return (
        <div className={style.todolistsContainer}>

            <h2>My todolists:</h2>

            <div className={style.todolists}>

                <AddItemInputForm addItem={props.addTodolist}/>

                {props.todolists.map((tl) => {

                        let tasksForTodolist = props.tasks[tl.id];
                        if (tl.filter === 'active') {
                            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
                        }
                        if (tl.filter === 'completed') {
                            tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
                        }


                        return <Paper style={{margin: '10px'}} elevation={24}
                        >

                            <Todolist key={tl.id}
                                      id={tl.id}
                                      title={tl.title}
                                      taskFilter={tl.filter}

                                      removeTodolist={props.removeTodolist}
                                      changeFilter={props.changeFilter}
                                      changeTodolistTitle={props.changeTitleTodolist}

                                      tasks={tasksForTodolist}
                                      removeTask={props.removeTask}
                                      addTask={props.addTask}
                                      changeTaskStatus={props.changeTaskStatus}
                                      changeTaskTitle={props.changeTaskTitle}
                            />
                        </Paper>
                    }
                )
                }
            </div>
        </div>
    );
};


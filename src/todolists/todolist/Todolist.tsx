import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolist.module.scss'
import Tasks from './tasks/Tasks';
import {FilterValuesType} from '../Todolists';
import {TaskType} from '../../App';
import {AddItemInputForm} from '../../commun/inputForm/AddItemInputForm';
import {EditableSpan} from '../../commun/editableSpan/EditableSpan';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    removeTask: (id: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void
    taskFilter: FilterValuesType
    removeTodolist: (id: string) => void
    changeTodolistTitle: (newValue: string, id: string) => void
}

export function Todolist(props: PropsType) {
    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const onAllClickHandler = () => {
        props.changeFilter('all', props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active', props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed', props.id)
    }
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const onChangeTodolistTitle = (newValue: string) => {
        props.changeTodolistTitle(newValue, props.id)
    }


    return (

        <div className={style.todolist}>

            <div className={style.todolistTitle}>
                <h3>
                    <EditableSpan title={props.title}
                                  onChangeTitle={onChangeTodolistTitle}/>
                </h3>


                <IconButton size="small">
                    <DeleteIcon onClick={removeTodolistHandler}/>
                </IconButton>
            </div>


            <AddItemInputForm addItem={addTask}/>

            <ul>
                <Tasks id={props.id}
                       tasks={props.tasks}
                       removeTask={props.removeTask}
                       changeTaskStatus={props.changeTaskStatus}
                       changeTaskTitle={props.changeTaskTitle}
                />

            </ul>

            <div className={style.filterButtonsContainer}>
                <Button className={props.taskFilter === 'all' ? style.activeFilter : ''}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button className={props.taskFilter === 'active' ? style.activeFilter : ''}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button className={props.taskFilter === 'completed' ? style.activeFilter : ''}
                        onClick={onCompletedClickHandler}>Completed
                </Button>

            </div>

        </div>
    )
}
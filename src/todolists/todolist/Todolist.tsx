import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Todolist.module.scss'
import Tasks from './tasks/Tasks';
import {FilterValuesType} from '../Todolists';
import {TaskType} from '../../App';


type PropsType = {
    title: string
    tasks: Array<TaskType>
    changeTaskFilter: (value: FilterValuesType) => void
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    taskFilter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);

        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== '' && newTaskTitle !== 'kakashka') {
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onAllClickHandler = () => {
        props.changeTaskFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changeTaskFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeTaskFilter('completed')
    }


    return (
        <div className={style.todolist}>

            <h3>{props.title}</h3>

            <div>
                <input className={error ? style.error : ''}
                       value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />

                <button onClick={addTaskHandler}>+</button>

                {error && <div className={style.errorMsg}>{error}</div>}

            </div>

            <ul>
                <Tasks
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
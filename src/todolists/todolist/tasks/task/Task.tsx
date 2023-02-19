import React, {ChangeEvent} from 'react';
import style from './Task.module.scss';

import {TaskType} from '../../../../App';


type PropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void

}

const Task = (props: PropsType) => {
    return (
        <div className={style.taskContainer}>
            {props.tasks.map(t => {
                    const onRemoveHandler = () => {
                        props.removeTask(t.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked);

                    }

                    return <li key={t.id}
                               className={t.isDone ? style.isDone : ''}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={onChangeHandler}
                        />
                        <span>{t.title}</span>
                        <button onClick={onRemoveHandler}>x</button>
                    </li>
                }
            )
            }
        </div>
    );
};

export default Task;
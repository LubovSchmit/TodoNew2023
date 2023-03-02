import React, {ChangeEvent} from 'react';
import style from './Task.module.scss';

import {TaskType} from '../../../../App';
import {EditableSpan} from '../../../../commun/editableSpan/EditableSpan';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Checkbox} from '@mui/material';


type PropsType = {
    id: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void

}

const Task = (props: PropsType) => {

    return (
        <div className={style.taskContainer}>
            {props.tasks.map(t => {
                    const onRemoveHandler = () => {
                        props.removeTask(t.id, props.id)
                    }
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);

                    }
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);

                    }

                    return <li key={t.id}
                               className={t.isDone ? style.isDone : ''}>

                        <Checkbox
                               checked={t.isDone}
                               onChange={onChangeStatusHandler}
                        />

                        <EditableSpan title={t.title}
                                      onChangeTitle={onChangeTitleHandler}/>

                        <IconButton size="small">
                            <DeleteIcon onClick={onRemoveHandler}/>
                        </IconButton>
                    </li>
                }
            )
            }
        </div>
    );
};

export default Task;
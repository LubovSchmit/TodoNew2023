import React from 'react';
import style from './Tasks.module.scss';
import Task from './task/Task';
import {TaskType} from '../../../App';


type PropsType = {
    id: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
}


const Tasks = (props: PropsType) => {


    return (
        <div className={style.tasksContainer}>

            <h4>
                List of tasks:
            </h4>


            <Task id={props.id}
                  tasks={props.tasks}
                  removeTask={props.removeTask}
                  changeTaskStatus={props.changeTaskStatus}
            />
        </div>
    );
};

export default Tasks;
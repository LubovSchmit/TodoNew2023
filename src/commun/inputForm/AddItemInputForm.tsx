import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from '../../commun/inputForm/AddItemInputForm.module.scss';



type PropsType = {
    addItem: (title: string) => void
}

export const AddItemInputForm = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState('');
    let [error, setError] = useState<string | null>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);

        if (e.charCode === 13) {
            props.addItem(newTaskTitle)
            setNewTaskTitle('')
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== '' && newTaskTitle !== 'kakashka') {
            props.addItem(newTaskTitle)
            setNewTaskTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div className={style.addItemInputFormContainer}>
            <input className={error ? style.error : ''}
                   value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />

            <button onClick={addTaskHandler}>+</button>

            {error && <div className={style.errorMsg}>{error}</div>}

        </div>
    );
};


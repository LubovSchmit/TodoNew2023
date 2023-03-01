import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from '../../commun/inputForm/AddItemInputForm.module.scss';



type PropsType = {
    addItem: (title: string) => void
}

export const AddItemInputForm = (props: PropsType) => {

    const [newItemTitle, setNewItemTitle] = useState<string>('');
    let [error, setError] = useState<string | null>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItemTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);

        if (e.charCode === 13) {
            props.addItem(newItemTitle)
            setNewItemTitle('')
        }
    }
    const addItemHandler = () => {
        if (newItemTitle.trim() !== '' && newItemTitle !== 'kakashka') {
            props.addItem(newItemTitle)
            setNewItemTitle('')
        } else {
            setError('Title is required')
        }
    }

    return (
        <div className={style.addItemInputFormContainer}>
            <input className={error ? style.error : ''}
                   value={newItemTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />

            <button onClick={addItemHandler}>+</button>

            {error && <div className={style.errorMsg}>{error}</div>}

        </div>
    );
};


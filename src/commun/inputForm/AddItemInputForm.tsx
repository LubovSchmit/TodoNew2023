import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from '../../commun/inputForm/AddItemInputForm.module.scss';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';

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
            <div className={style.textFieldAndButtonContainer}>
                <TextField value={newItemTitle}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}

                           variant="standard"
                           label={'Task title'}
                           error={!!error}
                           helperText={error}
                />

                <IconButton onClick={addItemHandler}>
                    <AddTaskIcon/>
                </IconButton>
            </div>


            {/* {error && <div className={style.errorMsg}>{error}</div>}*/}


        </div>
    );
};


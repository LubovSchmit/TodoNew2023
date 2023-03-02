import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@mui/material';


type PropsType = {
    title: string
    onChangeTitle: (newValue: string) => void
}


export const EditableSpan = (props: PropsType) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState<string>('')

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    };
    const activateViewMode = () => {
        setEditMode(false)
        props.onChangeTitle(title)
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField value={title}
                     autoFocus
                     onBlur={activateViewMode}
                     onChange={onChangeHandler}
                     variant="standard"/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>

};


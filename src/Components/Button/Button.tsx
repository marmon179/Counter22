import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    title: string
    disabled?: boolean
    onClick: () => void
}


export function Button(props: ButtonPropsType) {
    return (
        <button
            className={s.button}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.title}</button>
    )
}
import React, {ChangeEvent} from 'react';
import s from './Input.module.css'


type InputPropsType = {
    startValue: number
    maxValue: number
    onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void

}


export function Inputs(props: InputPropsType) {
    let errorStart = (props.maxValue < 0) || (props.startValue === props.maxValue) ? s.error : s.input
    let errorMax = (props.startValue < 0) || (props.startValue === props.maxValue) ? s.error : s.input

    return (
        <>
            <input type='number'
                   className={errorStart}
                   value={props.maxValue}
                   onChange={props.onChangeMax}
                   style={{width: 90}}/>

            <input type='number'
                   className={errorMax}
                   value={props.startValue}
                   onChange={props.onChangeStart}
                   style={{width: 90}}/>
        </>
    )
}
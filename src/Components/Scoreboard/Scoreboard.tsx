import React from 'react';
import s from './Scoreboard.module.css'


type ScoreboardType = {
    count: number
    startValue: number
    maxValue: number
    isError: boolean
}

export const Scoreboard = (props: ScoreboardType) => {

    const error1 = props.count === props.maxValue ? s.error : ''


    return (
        <div className={error1}>
            {
                props.count
            }
        </div>)
}


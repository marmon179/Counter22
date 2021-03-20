import React, {ChangeEvent} from 'react';
import {Inputs} from '../Input/Inputs';
import {Button} from '../Button/Button';
import s from './SettingCounter.module.css'

type SettingCounterPropsType = {
    start: number
    max: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setButton: () => void
    disabled: boolean
    isError: boolean
}

const SettingCounter = (props: SettingCounterPropsType) => {
    return (
        <div className={s.containerCounter}>
            <div className={s.scoreboard}>
                <div className={s.textScoreboardSettings}>
                    <div className={s.textMax}>Max.value:</div>
                    <div className={s.textStart}>Start value:</div>
                </div>
                <div className={s.inputContainer}>
                    <Inputs
                        startValue={props.start}
                        maxValue={props.max}
                        onChangeStart={props.onChangeStartValue}
                        onChangeMax={props.onChangeMaxValue}/>
                </div>
            </div>
            <div className={s.containerButton}>

                <Button onClick={props.setButton} title='set' disabled={props.disabled || props.isError}/>

            </div>
        </div>
    );
};

export default SettingCounter;
import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import SettingCounter from './Components/SettingCounter/SettingCounter';
import Counter from './Components/Counter/Counter';

function App() {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [display, setDisplay] = useState(true)


    useEffect(() => {
        let valueAssMax = localStorage.getItem('counterMax')
        if (valueAssMax) {
            let newValue = JSON.parse(valueAssMax)
            setMax(newValue)
        }
    }, [])
    useEffect(() => {
        let valueAssStart = localStorage.getItem('counterStart')
        if (valueAssStart) {
            let newValue = JSON.parse(valueAssStart)
            setStart(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMax', JSON.stringify(max))
    }, [max])
    useEffect(() => {
        localStorage.setItem('counterStart', JSON.stringify(start))
    }, [start])

    const isError = max < 0 || start >= max || start < 0

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
        setDisabled(false)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setDisabled(false)
    }
    const incButton = () => count <= max ? setCount(count + 1) : ''

    const setButtonSetting = () => {
        setCount(start)
        setDisabled(true)
        setDisplay(true)
    }
    const setButtonCount = () => {
        setDisplay(false)
    }

    const resetButton = () => setCount(start)


    return (
        <div className="App">
            {display ? <Counter
                    count={count}
                    start={start}
                    max={max}
                    disabled={disabled}
                    isError={isError}
                    incButton={incButton}
                    resetButton={resetButton}
                    setButton={setButtonCount}/>
                : <SettingCounter
                    isError={isError}
                    disabled={disabled}
                    max={max}
                    start={start}
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeStartValue={onChangeStartValue}
                    setButton={setButtonSetting}/>
            }

        </div>
    );
}

export default App;

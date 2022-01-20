import { useState,useRef } from "react"
const StopWatch=()=>{
    const [timer, setTimer] = useState(0)
    const [active, setIsActive] = useState(false)
    const [paused, setIsPaused] = useState(false)
    const count = useRef(null)
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        count.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handlePause = () => {
        clearInterval(count.current)
        setIsPaused(false)
    }
    const handleResume = () => {
        setIsPaused(true)
        count.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handleReset = () => {
        clearInterval(count.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }
    const timeFormat = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
      
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    return(
        <div id="bodyContainer">
            <div id="stopwatchContainer">
                <div id="innerContainer">
                    <div id="content">
                        <p id="title">React Stopwatch</p>
                        <p id="time" data-testid="time">{timeFormat(timer)}</p>
                        <div id="buttonContainer">
                            {
                                ( !active && !paused) ? <button id="start" data-testid="start" onClick={handleStart}>Start</button> : (
                                  paused ? <button id="pause" data-testid="pause" onClick={handlePause}>Pause</button> : ( <button id="resume" data-testid="resume" onClick={handleResume}>Resume</button> )
                                )
                            }
                            <button id="reset" data-testid="reset" onClick={handleReset} disabled={!active}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default StopWatch;
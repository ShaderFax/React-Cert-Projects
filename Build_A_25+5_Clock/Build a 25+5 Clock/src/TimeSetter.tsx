import React from "react";

interface TimerSetterProps {
    time: number,
    setTime: (time: number) => void,
    min: number,
    max: number,
    interval: number,
    type: "break" | "session"
}

const TimeSetter: React.FC<TimerSetterProps> = ({
    time, setTime, min, max, interval, type
}) => {
    return (
        <div>
            <button onClick={() => (time > min ? setTime(time-interval) : null)}
            id={`${type}-decrement`}/>
        </div>
    )
}

export default TimeSetter;
import React from 'react'
import { useRef,useState } from 'react'
function appa() {
    const [time, setTime] =useState(null);
    const [now, setNow] =useState(null);
    
    const intervalRef = useRef(null);

    const handleStart=()=>{
        setTime(Date.now());
        setNow(Date.now());
        intervalRef.current = setInterval(()=>{
            setTime(Date.now());
        },10);
    };
    const handleStop=()=>{
        clearInterval(intervalRef.current);
    };
    let timepassed =(time-now)/1000;
    
  return (
    <div>
<h1>Design Stopwatch in React</h1>
<h2>Stopwatch:{timepassed.toFixed(3)} </h2>
<div>
<button onClick={handleStart} >Start</button>
<button onClick={handleStop} > Stop</button>

</div>

    </div>
  )
}

export default appa
import { useState, useRef } from "react";

export default function Interval() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {          
        setSeconds((prev) => {             // this line runs and then
          if (prev === 59) {                // if our second is equal to 59
            setMinutes((m) => {            // and if our minutes are equal to 59 
              if (m === 59) {              // 
                setHours((h) => h + 1);      // we wil increase our hours to ++
                return 0;                     // set the minutes data to 0
              }
              return m + 1;                   // here we return the minutes increment
            });
            return 0;                         // here we set out second to zero
          }
          return prev + 1;                   
        }); 
      }, 1000);

      setIsRunning(true);
    }
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function restart() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  }

  return (
    <div id="stop">
      <div id="watch">
        <h1>
          Stopwatch: {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </h1>

        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={stop} disabled={!isRunning}>Stop</button>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
}

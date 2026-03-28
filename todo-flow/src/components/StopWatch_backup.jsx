import { useEffect, useState, useRef } from "react";

function StopWatch() {
  const [isPlay, setIsPlay] = useState(false);
  const [elapseTime, setElapseTime] = useState(0); // diffence in time mm
  const [startTime, setStartTime] = useState(0);

  const timerRef = useRef(null);

  function playTimer() {
    setIsPlay(true);
    setStartTime(Date.now() - elapseTime); // preserve elapsed time
  }

  function pauseTimer() {
    setIsPlay(false);
  }

  function resetTimer() {
    setIsPlay(false);
    setElapseTime(0);
    setStartTime(0);
    clearInterval(timerRef.current);
  }

  useEffect(() => {
    if (isPlay) {
      timerRef.current = setInterval(() => {
        setElapseTime(Date.now() - startTime);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    console.log('start time: ', startTime)
    console.log('elapse time: ', elapseTime)

    return () => clearInterval(timerRef.current);
  }, [isPlay, startTime]); 

// Format time (hh:mm:ss)
function formatTime(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(ms % 1000).padStart(3, "0");

    // return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    return {
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'milliseconds': milliseconds
    }
}

  return (
    <div>
      {/* <h3>{formatTime(elapseTime)}</h3> */}
        <h3> {formatTime(elapseTime).minutes}<span>:</span>
        {formatTime(elapseTime).seconds}<span>:</span>
        {formatTime(elapseTime).milliseconds}</h3>
        <button onClick={playTimer}>Play</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default StopWatch;
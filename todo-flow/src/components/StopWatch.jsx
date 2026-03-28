import { useEffect, useState, useRef } from "react";
import "../css/StopWatch.css";

function StopWatch() {
  const [isPlay, setIsPlay] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const timerRef = useRef(null);

  function playTimer() {
    setIsPlay(true);
    setStartTime(Date.now() - elapseTime);
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
    return () => clearInterval(timerRef.current);
  }, [isPlay, startTime]);

  function formatTime(ms) {
    return {
      hours:        String(Math.floor(ms / 3600000)).padStart(2, "0"),
      minutes:      String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0"),
      seconds:      String(Math.floor((ms % 60000) / 1000)).padStart(2, "0"),
      milliseconds: String(ms % 1000).padStart(3, "0"),
    };
  }

  const { minutes, seconds, milliseconds } = formatTime(elapseTime);

  return (
    <div className="sw-root">
      <div className="sw-card">
        <div className="sw-display">
          <div className="sw-segment">
            <span className="sw-digits">{minutes}</span>
            <span className="sw-label">min</span>
          </div>
          <span className="sw-colon">:</span>
          <div className="sw-segment">
            <span className="sw-digits">{seconds}</span>
            <span className="sw-label">sec</span>
          </div>
          <span className="sw-colon">:</span>
          <div className="sw-segment">
            <span className="sw-digits ms">{milliseconds}</span>
            <span className="sw-label">ms</span>
          </div>
        </div>

        <div className="sw-controls">
          <button className="sw-btn play"  onClick={playTimer}>▶ Play</button>
          <button className="sw-btn pause" onClick={pauseTimer}>⏸ Pause</button>
          <button className="sw-btn reset" onClick={resetTimer}>↺ Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
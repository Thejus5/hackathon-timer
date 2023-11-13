import { useEffect } from "react";
import { ClockWrapper } from "./timer.style";
import useTimerEngine from "./timerEngine";
import { appConfigs } from "../../Core/config";

function Timer() {
  const { day, seconds, hours, minutes } = useTimerEngine(
    appConfigs.deadLineDate
  );

  return (
    <ClockWrapper>
      <div className="timeBox">
        <div className="displayBox days">
          <svg height="210" width="210">
            <polygon
              points="0 0,157.5 0,210 52.5,210 210, 52.5 210, 0 157.5, 0"
              style={{ fill: "#111", stroke: "#ff0000", strokeWidth: "1" }}
            />
          </svg>
          <div className="timerText">
            <p className="timerValue">{day < 10 ? `0${day}` : day}</p>
            <p className="timerLabel">Days</p>
          </div>
        </div>

        <div className="displayBox hours">
          <svg height="210" width="210">
            <polygon
              points="0 0,157.5 0,210 52.5,210 210, 52.5 210, 0 157.5, 0"
              style={{ fill: "#111", stroke: "#ff0000", strokeWidth: "1" }}
            />
          </svg>
          <div className="timerText">
            <p className="timerValue">{hours < 10 ? `0${hours}` : hours}</p>
            <p className="timerLabel">hours</p>
          </div>
        </div>

        <div className="displayBox minutes">
          <svg height="210" width="210">
            <polygon
              points="0 0,157.5 0,210 52.5,210 210, 52.5 210, 0 157.5, 0"
              style={{ fill: "#111", stroke: "#ff0000", strokeWidth: "1" }}
            />
          </svg>
          <div className="timerText">
            <p className="timerValue">
              {minutes < 10 ? `0${minutes}` : minutes}
            </p>
            <p className="timerLabel">Minutes</p>
          </div>
        </div>

        <div className="displayBox seconds">
          <svg height="210" width="210">
            <polygon
              points="0 0,157.5 0,210 52.5,210 210, 52.5 210, 0 157.5, 0"
              style={{ fill: "#111", stroke: "#ff0000", strokeWidth: "1" }}
            />
          </svg>
          <div className="timerText">
            <p className="timerValue">
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <p className="timerLabel">Seconds</p>
          </div>
        </div>
      </div>
    </ClockWrapper>
  );
}

export default Timer;

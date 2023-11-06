import { AppTexts } from "../../Core/text";
import { ClockWrapper } from "./timer.style";
import useTimerEngine from "./timerEngine";

function Timer() {
  const { day, seconds, hours, minutes } = useTimerEngine(
    AppTexts.deadLineDate
  );

  return (
    <ClockWrapper>
      <div className="timeBox">
        <div className="displayBox days">
          <p className="timerValue">{day < 10 ? `0${day}` : day}</p>
          <p className="timerLabel">Days</p>
        </div>
        <div className="displayBox hours">
          <p className="timerValue">{hours < 10 ? `0${hours}` : hours}</p>
          <p className="timerLabel">hours</p>
        </div>
        <div className="displayBox minutes">
          <p className="timerValue">{minutes < 10 ? `0${minutes}` : minutes}</p>
          <p className="timerLabel">Minutes</p>
        </div>
        <div className="displayBox seconds">
          <p className="timerValue">{seconds < 10 ? `0${seconds}` : seconds}</p>
          <p className="timerLabel">Seconds</p>
        </div>
      </div>
    </ClockWrapper>
  );
}

export default Timer;

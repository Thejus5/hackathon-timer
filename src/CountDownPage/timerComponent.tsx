import { countdownTexts } from "../Core/text";
import Timer from "../components/Timer/timer";
import { StyledTimerComponent } from "./countDown.style";

function TimerComponent() {
  return (
    <StyledTimerComponent>
      <p className="timerTitle">{countdownTexts.timerTitle}</p>

      <Timer />

      <p className="timerDescription">{countdownTexts.timerDescription}</p>
    </StyledTimerComponent>
  );
}

export default TimerComponent;

import Timer from "../components/Timer/timer";
import ActionLinks from "../components/actionLinks/actionLinks";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import Description from "../components/gameDescription/gameDescription";
import GameTitle from "../components/gameTitle/gameTitle";
import { TimerWrapper } from "./countDown.style";

function CountDownPage() {
  return (
    <BackgroundAnimation>
      <TimerWrapper>
        <GameTitle />
        <Description />
        <Timer />
        <ActionLinks />
      </TimerWrapper>
    </BackgroundAnimation>
  );
}

export default CountDownPage;

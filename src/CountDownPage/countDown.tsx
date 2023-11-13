import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import NavBar from "../components/navBar/navBar";
import { TimerWrapper } from "./countDown.style";
import TimerComponent from "./timerComponent";

function CountDownPage() {
  return (
    <BackgroundAnimation>
      <NavBar/>
      <TimerWrapper>
        <TimerComponent/>
      </TimerWrapper>
    </BackgroundAnimation>
  );
}

export default CountDownPage;

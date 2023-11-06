import { AppTexts } from "../../Core/text";
import { TitleWrapper } from "./gameTitle.style";

function GameTitle() {
  return (
    <TitleWrapper>
      <div className="dashBox"></div>
      <div className="titleBox">
        <p>{AppTexts.gameTitle}</p>
      </div>
      <div className="dashBox"></div>
    </TitleWrapper>
  );
}

export default GameTitle
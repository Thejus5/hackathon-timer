import { AppTexts } from "../../Core/text";
import { DescriptionTag } from "./gameDescription.style";

function Description() {
  return (
    <DescriptionTag>
      {AppTexts.gameDescription}
    </DescriptionTag>
  );
}

export default Description;

import {
  ContentHolder,
  CountDownPageWrapper,
  SamuraiWrapper,
} from "./backgroundAnimation.style";
import samurai from "../../assets/samurai.png";

function BackgroundAnimation({ children }: Readonly<{ children: any }>) {
  return (
    <CountDownPageWrapper>
      <SamuraiWrapper>
        <div className="smokeImage"></div>
        <img className="samuraiImg" src={samurai} alt="samurai"/>
      </SamuraiWrapper>
    
      <ContentHolder>
        {children}
      </ContentHolder>
    </CountDownPageWrapper>
  );
}

export default BackgroundAnimation;

import { CountDownPageWrapper } from "./backgroundAnimation.style";

function BackgroundAnimation({ children }: Readonly<{ children: any }>) {
  return (
    <CountDownPageWrapper>
      <div className="opaqueCurtain">{children}</div>
    </CountDownPageWrapper>
  );
}

export default BackgroundAnimation;

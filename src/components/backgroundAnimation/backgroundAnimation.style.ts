import styled, { keyframes } from "styled-components";
// const bgImage = import('../../assets/bg1.jpg')
import bgImage1 from "../../assets/bg1.jpg";
import bgImage2 from "../../assets/bg2.jpg";

const backgroundAnimation = keyframes`
0%{
    background-image: url(${bgImage1});
    background-size: 110% 110%;
}
    100%{
        background-image: url(${bgImage2});
        background-size: 100% 100%;
    }
`;
export const CountDownPageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  animation-name: ${backgroundAnimation};
  animation-direction: alternate-reverse;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
  animation-duration: 20s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  .opaqueCurtain {
    width: 100%;
    height: 100%;
    background-color: #1111117a;
  }
`;

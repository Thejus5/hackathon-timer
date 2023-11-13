import styled from "styled-components";
import bgImage from "../../assets/mainBackground.png";
import smoke from "../../assets/blackSmoke.png";

export const CountDownPageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  .opaqueCurtain {
    display: none;
    width: 100%;
    height: 100%;
    background-color: #1111117a;
  }

  .samuraiInSpotlight {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
export const SamuraiWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  .samuraiImg {
    position: absolute;
    top: 60%;
    left: 50%;
    width: auto;
    max-width: 100%;
    transform: translate(-50%, -50%);
    /* background-color: #fff; */
  }
  .smokeImage {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${smoke});
    background-size: cover;
    background-position: bottom -400px left 0px;
    background-repeat: no-repeat;
  }
`;
export const ContentHolder = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;

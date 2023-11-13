import styled from "styled-components";

export const TimerWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 914px;
  bottom: 0;
  left: 50%;
  padding-bottom: 69px;
  transform: translateX(-50%);
`;

export const StyledTimerComponent = styled.div`
  width: 100%;

  .timerTitle {
    width: 100%;
    text-align: center;

    font-family: Zen Dots;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  .timerDescription {
    width: 100%;
    margin-top: 24px;
    
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 150% */
    letter-spacing: 0.8px;
  }
`;

import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
  .timeBox {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .displayBox {
    position: relative;
    width: 210px;
    height: 210px;
    margin-left: 24px;
    .timerText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .timerValue {
        font-family: Zen Dots;
        font-size: 68px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
      }
      .timerLabel {
        font-family: Zen Dots;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
      }
    }
  }
  .displayBox:first-child{
    margin-left: 0;
  }
`;

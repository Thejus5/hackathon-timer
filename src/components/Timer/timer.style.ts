import styled from "styled-components";

export const ClockWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 45px;
  /* border: 1px solid #fff; */
  padding-top: 20.6%; // Aspect ratio [w:h] 692.5:143 (calculated as h*100 / w)
  .timeBox {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: #ff0000; */

    .displayBox {
      border-right: 1px solid #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      height: 100%;

      .timerValue {
        width: 93px;
        font-size: 77px;
        font-weight: 700;
        line-height: 77px; /* 100% */
        letter-spacing: -3px;
        text-align: center;
      }
      .timerLabel {
        font-size: 16px;
        font-weight: 400;
        line-height: 16px; /* 100% */
        text-transform: lowercase;
      }
    }
    .seconds {
      border: none;
    }
  }

  @media (max-width: 768px) {
    .timeBox {
      .displayBox {
        .timerValue {
          font-size: 55px;
        }
      }
    }
  }
  @media (max-width: 428px) {
    .timeBox {
      .displayBox {
        .timerValue {
          font-size: 35px;
          line-height: 60px; /* 100% */
        }
        .timerLabel {
          font-size: 12px;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  height: 50px;
`;

export const LinkBox = styled.div`
  position: relative;
  width: 144px;
  height: 100%;
  text-align: center;
  margin-right: 29px;
  border-top: 1px solid #fff;

  cursor: pointer;
  .label {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15.219px;
    font-weight: 700;
    line-height: 18px; /* 118.273% */
    letter-spacing: -1px;
  }
  .hoverBoxLayout {
    height: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 5px 0;
    transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .subLabel {
    font-size: 14px;
    font-weight: 300;
    margin-top: -10px;
    opacity: 0;
    transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    border: none;
    .hoverBoxLayout {
      height: 100%;
      border-top: 2px solid #e6292e;
      border-bottom: 1px solid #e6292e;
    }
    .subLabel {
      margin-top: 25px;
      opacity: 1;
    }
  }
`;

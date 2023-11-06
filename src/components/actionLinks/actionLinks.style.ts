import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  height: 92px;
  /* border: 1px solid #fff; */
  .linkBox {
    border-top: 1px solid #fff;
    width: 144px;
    padding: 7px 0;
    text-align: center;
    margin-right: 29px;
    transition: border ease 2s;
    cursor: pointer;
    .label {
      font-size: 15.219px;
      font-weight: 700;
      line-height: 18px; /* 118.273% */
      letter-spacing: -1px;
    }
  }
  .linkBox:last-child {
    margin-right: 0;
  }

  .linkBox:hover {
    border-top: 2px solid #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const LinkBox = styled.div`
  border-top: 1px solid #fff;
  width: 144px;
  height: fit-content;
  padding: 7px 0;
  text-align: center;
  margin-right: 29px;

  cursor: pointer;
  .label {
    font-size: 15.219px;
    font-weight: 700;
    line-height: 18px; /* 118.273% */
    letter-spacing: -1px;
  }
  .subLabel{
    font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
    display: none;
  }

  /* .linkBox:last-child {
    margin-right: 0;
  } */

  &:hover {
    border-top: 2px solid #e6292e;
    border-bottom: 1px solid #e6292e;
    .subLabel{
        display: block;
    }
  }
`;

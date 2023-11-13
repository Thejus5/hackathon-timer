import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  padding: 24px 24px;
  background: #0000007d;

  .centeredDiv {
    display: flex;
    width: 1202px;
    max-width: 100%;
    justify-content: space-between;
    margin: 0 auto;
  }

  .titleText {
    display: flex;
    align-items: center;

    font-family: Zen Dots;
    font-size: 26.491px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

    cursor: pointer;
  }

  .navLinks {
    display: flex;
    align-items: center;
    .links {
      display: flex;
      margin-right: 62px;
    }
    .links:last-child {
      margin-right: 0;
    }

    .subscribeBtn {
      margin-right: 24px;
    }
  }

  .linkText {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .linkText:hover {
    border-bottom: 1px solid #fff;
  }
`;

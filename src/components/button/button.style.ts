import styled from "styled-components";

interface WrapperProps {
  variant: "primary" | "secondary";
}

export const ButtonWrapper = styled.div<WrapperProps>`
  position: relative;
  width: fit-content;

  cursor: pointer;
  p {
    text-align: center;
    margin-top: -38px;
    width: 100%;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .buttonFill {
    display: ${(props: any) =>
      props.variant === "primary" ? "block" : "none"};
  }
  .buttonSecondary {
    display: ${(props: any) =>
      props.variant === "secondary" ? "block" : "none"};
  }
  .buttonPrimaryHover {
      display: none
    }

  &:hover {
    .buttonFill {
      display: ${(props: any) =>
        props.variant === "primary" ? "none" : "block"};
    }
    .buttonSecondary {
      display: none;
    }
    .buttonPrimaryHover {
      display: ${(props: any) =>
        props.variant === "primary" ? "block" : "none"};
    }
  }
`;

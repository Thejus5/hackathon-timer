import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    .dashBox{
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #fff;
    }
    .titleBox{
        padding: 14px 7px;
        margin: 0 26px;
        border: 1px solid #fff;
        p{
            text-transform: uppercase;
            font-weight: 700;
            font-size: 35px;
        }
    }
`
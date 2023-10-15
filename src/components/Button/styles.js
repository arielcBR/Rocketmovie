import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background-color: ${({theme}) => theme.COLORS.ROSE};
    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 16px;
    font-weight: 700;
    height: 45px;
    width: 100%;

    > span{
        color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};
        display: flex;
        align-items: center;
        justify-content: center;    
        gap: 8px;
    }
`;
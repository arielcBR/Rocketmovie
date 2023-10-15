import styled from "styled-components";

export const Container = styled.span`
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
    color: ${({theme}) => theme.COLORS.WHITE_300};
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    margin: 15px 8px 0 0;
    padding: 5px 16px;
    width: 91px;

    &:hover{
        filter: brightness(0.9);
    }
`;
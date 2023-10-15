import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_LIGHT};
    border-radius: 10px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
    width: 100%;    

    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
    
    > input {
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: "Roboto Slab", sans-serif;
        height: 18px;
        padding: 19px 24px;
        width: 100%;
        
        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_300};   
            font-size: 14px;
        }
    }
`;
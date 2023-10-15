import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    border-radius: 16px;
    margin: 14px auto;
    padding: 32px;
    width: 1057px;    
    
    > h3{
        color: ${({theme}) => theme.COLORS.WHITE_200};
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 12px;
    }

    > p{
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-size: 16px;
        font-weight: 700;  
        padding: 15px 0;
        text-align: justify;
    }

`;


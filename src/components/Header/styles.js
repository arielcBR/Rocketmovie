import styled from "styled-components";

export const Container = styled.header`
    border-bottom: 1px solid ${({theme}) => theme.COLORS.MARGIN_BOTTOM};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 24px 123px;
    height: 120px;
    width: 100%;

    > h1{
        color: ${({theme}) => theme.COLORS.ROSE};
        font-family: 'Roboto Slab', sans-serif;
        font-size: 24px;
        font-weight: 700;
    }

    > input{
        width: 630px;
    }

    .profile{
        display: flex;
        gap: 9px;
    
        > div {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
            gap: 8px;
            width: 120px;

            > h2{
            font-size: 14px;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE_200};
            }

            > a{
                color: ${({ theme }) => theme.COLORS.GRAY_300};
                font-size: 14px;
                font-weight: 700;
            }
        }
        
        > img {
            border-radius: 50%;
            height: 64px;
            width: 64px;
        }
    }

`;

import styled from "styled-components";
import backgroundImg from "../../assets/signInBackground.jpeg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
`;
export const Form = styled.div`
    font-family: "Roboto Slab", sans-serif;
    margin: 0 160px 0 135px;
    height: 100vh;
    width: 340px;

    > h1{
        color: ${({theme}) => theme.COLORS.ROSE};
        font-size: 48px;
        font-weight: 700;
        padding-top: 150px;
    }
    
    > p {
        color: ${({theme}) => theme.COLORS.GRAY_500};
        font-size: 14px;
    }
    
    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE_200};
        margin: 48px 0; 
    }
    
    > div {
        border: none;
        border-radius: 10px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_LIGHT};
        padding: 12px;
        margin-bottom: 8px;
        height: 45px;
    }

    > div > input{
        outline: none;
    }

    > button{
        height: 45px;
        margin-top: 16px;
    }

    > span{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 36px;

        > svg{
            color: ${({theme}) => theme.COLORS.ROSE};
            transform: scale(1.4);
        }

        > a{
            color: ${({theme}) => theme.COLORS.ROSE};
            font-size: 16px;
        }
    }

`;

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
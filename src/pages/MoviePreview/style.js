import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;

    > div{
        padding: 0 106px 0 123px;
    }
`;

export const BackButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;

    > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-size: 18px;
    }
    
    > a {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-family: "Roboto Slab", sans-serif;
        font-size: 16px;
    }
`;

export const Main = styled.div`
    padding: 24px 123px;
    height: calc(100vh - 120px);
    overflow-y: scroll;
    scroll-behavior: smooth;

    > .title{
        display: flex;
        align-items: center;
        gap: 19px;
        margin-top: 24px;

        > h2{
            color: ${({ theme }) => theme.COLORS.WHITE_200};
            font-family: "Roboto Slab", sans-serif;
            font-size: 36px;
            font-weight: 500;
        }
    }

    .detail {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        margin-top: 24px;

        > img, svg {
            border-radius: 50%;
            height: 16px;
            width: 16px;
        }

        > svg { 
            color: ${({ theme }) => theme.COLORS.ROSE};
        }

        > p {
            color: ${({ theme }) => theme.COLORS.WHITE_200};
            font-size: 16px;
        }
    }

    .tags{
        margin: 48px 0;
    }

    .description {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        font-family: "Roboto Slab", sans-serif;
        margin-bottom: 106px;
        text-align: justify;
        text-indent: 3em;
    }

    &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        height: 2rem;

        background-color: ${ ({theme}) => theme.COLORS.ROSE };
        border-radius: 0.8rem;
    }

`;




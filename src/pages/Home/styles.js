import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    
    > div{
        padding: 50px 123px;
    }
`;

export const Main = styled.section`
    padding: 50px 123px;
    height: calc(100vh - 120px);
    overflow-y: scroll;
    scroll-behavior: smooth;

    > span {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > a {
            height: 32px;
            padding: 22px;
            width: 200px;
        }

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

export const Catalog = styled.div`
    margin-top: 70px;
    padding: 24px 123px;
`;
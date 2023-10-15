import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover, svg:hover{
        filter: brightness(0.9);
    }

`;

export default GlobalStyle;
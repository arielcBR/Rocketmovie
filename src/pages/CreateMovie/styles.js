import styled from "styled-components";

export const Container = styled.div`
    font-family: "Roboto Slab", sans-serif;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    
    > main {
        height: calc(100vh - 120px);
        padding: 24px 123px;
        overflow-y: auto;

        > a > .backButton{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;

            > svg{
                color: ${({theme}) => theme.COLORS.ROSE};
                transform: scale(1.4);
            }

            > a {
                color: ${({theme}) => theme.COLORS.ROSE};
                font-size: 16px;
                vertical-align: middle;
            }
        }

        > h2 {
            color: ${({theme}) => theme.COLORS.WHITE_200};
            font-size: 32px;
            font-weight: 500;
            margin-top: 24px;
        }

        > .inputsWrapper, .buttonsWrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            margin: 40px 0;

            > input {
                height: 55px;
                width: 100%;
            }
        }

        > textarea{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_LIGHT};
            border: none;
            border-radius: 10px;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-family: "Roboto Slab", sans-serif;
            padding: 19px 24px;
            resize: none;
            width: 100%;
            
            &::placeholder{
                color: ${({theme}) => theme.COLORS.GRAY_300};   
                font-size: 14px;
            }

            width: 100%;
            height: 250px;
        }

        > h3 {
            color: ${({theme}) => theme.COLORS.GRAY_200};
            font-size: 20px;
            margin-top: 24px;
        }

        > .tagsWrapper{
            border-radius: 8px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_DARK};
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            margin-top: 24px;
            padding: 16px;
            height: 88px;
            width: 100%;

            display: flex;
            align-items: center;
            gap: 24px;

            > .tagWrapper{
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_LIGHT};
                border-radius: 10px;
                color: #FFF;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                padding: 16px;
                height: 56px;
                width: 114px;

                > svg{
                    color: ${({theme}) => theme.COLORS.ROSE};
                }
            }

            > .newTagWrapper{
                background-color: transparent;
                border: 2px dashed ${({theme}) => theme.COLORS.GRAY_300};
                border-radius: 10px;
                color: ${({theme}) => theme.COLORS.GRAY_300};
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                padding: 16px;
                height: 56px;
                width: 180px;

                > svg{
                    color: ${({theme}) => theme.COLORS.ROSE};
                }
            }


        }

        > .buttonsWrapper {
            > a {
                height: 56px;
                width: 100%;
            }

            > a:first-child{
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_DARK};
                > span{
                    color: ${({theme}) => theme.COLORS.ROSE};
                }
            }
        }

        &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

        &::-webkit-scrollbar-thumb {
        height: 2rem;
        background-color: ${ ({theme}) => theme.COLORS.ROSE };
        border-radius: 8px;
    }
    }
`;
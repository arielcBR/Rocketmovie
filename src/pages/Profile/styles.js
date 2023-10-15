import styled from "styled-components";

const userImage = "https://github.com/arielcBR.png";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    > header {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
        height: 144px;

        > span{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            height: 100%;
            padding-left: 144px;

            > svg{
                color: ${({theme}) => theme.COLORS.ROSE};
                transform: scale(1.4);
            }

            > a > a{
                color: ${({theme}) => theme.COLORS.ROSE};
                font-size: 16px;
                vertical-align: middle;
            }
        }
    }

    > main {
        display: grid;
        place-content: center;

        > div{
            border: none;
            border-radius: 10px;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_LIGHT};
            padding: 8px;
            height: 56px;
            margin-bottom: 8px;
        }

        > div:nth-child(2){
            margin-top: 42px;
        }

        > div:nth-child(4){
            margin-top: 16px;
        }
        
        > div > input {
            outline: none;
            width: 340px;
            height: 56px;
        }

        > a {
            height: 48px;
            margin-top: 24px;
        }

        .profileUser{
            background: url(${userImage}) no-repeat center center;
            background-size: cover;
            border: none;
            border-radius: 50%;
            margin: -93px auto 0;
            height: 186px;
            width: 186px;
            position: relative;
            
            > .addPicture{
                background-color: ${({theme}) => theme.COLORS.ROSE};
                border: none;
                border-radius: 50%;
                height: 48px;
                width: 48px;
                
                position: absolute;
                top: 130px;
                left: 130px;

                > svg {
                    color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
                    height: 20px;
                    width: 20px;
                }
            }
        }

    }

`;

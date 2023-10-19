import styled from 'styled-components'

export const Container = styled.div`
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

            > div {
                display: flex;
                align-items: center;
                gap: 5px;
            }

            div > svg{
                color: ${({theme}) => theme.COLORS.ROSE};
                transform: scale(1.4);
            }

            > div > a{
                color: ${({theme}) => theme.COLORS.ROSE};
                font-size: 16px;
                vertical-align: middle;
            }
        }
    }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
        color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
        height: 20px;
        width: 20px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div{
    margin-bottom: 8px;
    padding: 0 6px;
  }

  > div > input {
    outline: none;
    width: 340px;
    height: 56px;

  }

  > div:nth-child(4) {
    margin-top: 24px;
  }
`


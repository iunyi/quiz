import styled from 'styled-components';

export const Wrapper = styled.div`
    max-with: 1200px;

    .number {
        height: 10vh;
        margin: 0 40px;
    }

    .question {
        height: 10vh;
        font-weight: 700;
        min-width: 250px;
        margin: 0 40px;
    }

    .answer {
        height: 40vh;
    }
` 

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user.select: none;
        min-width: 250px;
        width: 50%;
        line-height: 40px;
        margin: 5px 0;
        background: ${
            ({correct, userClicked}) => 
                correct ?
                '#44BBA4'
                : 
                !correct && userClicked ?
                    '#C76B84'
                    :
                    'white'

        };
        border: none;
        border-radius: 8px;
    }
`
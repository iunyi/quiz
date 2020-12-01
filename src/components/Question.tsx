import React from 'react';
import { AnswerState } from './App'
import { Wrapper, ButtonWrapper } from './Question.styles';

type Props = {
    question: string;
    answers : string[];
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerState | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const Question: React.FC<Props> = ({ 
    question, 
    answers , 
    handleClick, 
    userAnswer, 
    questionNumber, 
    totalQuestions 
}) => {
    let answersJSX = answers.map((answer, index) => {
        return (
            <ButtonWrapper 
                className="button-wrapper"
                key={index}
                correct={userAnswer?.correct_answer === answer}
                userClicked={userAnswer?.answer === answer}
            >
                <button onClick={handleClick} disabled={userAnswer ? true : false} value ={answer}>
                    <span dangerouslySetInnerHTML={{ __html: answer }}/>
                </button>
            </ButtonWrapper>
        )
    })
    return (
        <Wrapper>
            <p className="number">
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p className="question" dangerouslySetInnerHTML={{ __html: question }}/>
            <div className="answer">{answersJSX}</div>
        </Wrapper>
    )                                                                                                                                                                                                                                                                                                                                                           
}

export default Question;
import React from 'react';
import {AnswerState} from './App'

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
            <div key={index}>
                <button onClick={handleClick} disabled={userAnswer ? true : false} value ={answer}>
                    <span dangerouslySetInnerHTML={{ __html: answer }}/>
                </button>
            </div>
        )
    })
    return (
        <div>
            <p className="number">
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}/>
            <div>{answersJSX}</div>
        </div>
    )
}

export default Question;
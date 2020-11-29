// import react from 'react';

type Props = {
    question: string;
    answers : string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const Question: React.FC<Props> = ({ question, answers , callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <div>
            <p className="number">
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}/>
            <div>
                { answers.map( (answer, index) => {
                    return (
                        <div key={index}>
                            <button disabled={userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}/>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question;
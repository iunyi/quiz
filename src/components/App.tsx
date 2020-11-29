import React, {useState} from 'react';
import Question from './Question'
import {Difficulty, QuestionState, fetchQuizQuestions} from '../services/api'
import '../stylesheets/App.css';
import { type } from 'os';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correct_answer: string;
}

const totalQuestions= 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true); 

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(totalQuestions, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setQuestionNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      {
        gameOver || userAnswer.length === totalQuestions ? 
        (<button className="start" onClick={startQuiz}>Start</button>)
        :
        null
      }
      { !gameOver && <p className="score">Score:</p> }
      { loading && <p>Loading questions</p> }
      { !loading && !gameOver && (
        <Question 
          questionNumber={questionNumber + 1} 
          totalQuestions={totalQuestions} 
          question={questions[questionNumber].question} 
          answers={questions[questionNumber].answers} 
          userAnswer={userAnswer ? userAnswer : undefined} 
          callback={checkAnswer} 
        /> 
      )}
      

    </div>
  );
}

export default App;

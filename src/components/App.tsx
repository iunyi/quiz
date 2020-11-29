import React, {useState} from 'react';
import Question from './Question'
import {Difficulty, fetchQuizQuestions} from '../services/api'
import '../stylesheets/App.css';

const totalQuestions= 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true); 

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  console.log(fetchQuizQuestions(totalQuestions, Difficulty.EASY))

  return (
    <div className="App">
      {/* <Question questionNumber={questionNumber + 1} totalQuestions={totalQuestions} question={questions[questionNumber].question} answers={questions[questionNumber].answers} userAnswer={userAnswer ? userAnswer : undefined} callback={checkAnswer} /> */}
    </div>
  );
}

export default App;

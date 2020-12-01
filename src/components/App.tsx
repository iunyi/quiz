import React, {useState} from 'react';
import Question from './Question'
import {Difficulty, QuestionState, fetchQuizQuestions} from '../services/api'
// import '../stylesheets/App.css';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerState = {
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
  const [userAnswer, setUserAnswer] = useState<AnswerState[]>([]);
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
    if (!gameOver) {
      let selectedAnswer = e.currentTarget.value
      let correct = questions[questionNumber].correct_answer === selectedAnswer;
      
      if (correct) {
        setScore(prev => prev +1);
      }

      let answerState = {
        question: questions[questionNumber].question,
        answer: selectedAnswer,
        correct,
        correct_answer: questions[questionNumber].correct_answer,
      };

      setUserAnswer((prev) => [...prev, answerState])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1 className="title">Quiz</h1>
        {/* Start button */}
        {
          gameOver || userAnswer.length === totalQuestions ? 
          (<button className="start" onClick={startQuiz}>Start</button>)
          :
          null
        }

        {/* Score */}
        { !gameOver && !loading && <p className="score">Score: {score}</p> }

        {/* Loading */}
        { loading && (
          <p>  
            <i className="fas fa-spinner fa-pulse"></i>
          </p>)
        }

        {/* Question and answers */}
        { !loading && !gameOver && (
          <Question 
            questionNumber={questionNumber + 1} 
            totalQuestions={totalQuestions} 
            question={questions[questionNumber].question} 
            answers={questions[questionNumber].answers} 
            userAnswer={userAnswer ? userAnswer[questionNumber] : undefined} 
            handleClick={checkAnswer} 
          />)
        }

        {/* Next-question button */}
        {
          !gameOver&& !loading && userAnswer.length === questionNumber + 1 && questionNumber !== totalQuestions -1 ?
          <div className="next-wrapper">
            <button className="next" onClick={nextQuestion}>Next question</button>
          </div>
          :
          null
        }
      </Wrapper>
    </>
  );
}

export default App;

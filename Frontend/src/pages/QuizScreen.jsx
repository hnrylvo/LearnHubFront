import { useState, useEffect } from "react";
import QuestionList from "../data/questions.json";
import QuizResult from "../components/QuizResult";
import Question from "../components/Question";
import NavBar from "../components/NavBar";

function calculateResult(markedAnswer, shuffledQuestions) {
  let correct = 0;
  markedAnswer.forEach((selectedOption, index) => {
    const correctAnswerIndex = shuffledQuestions[index].incorrect_answers.length;

    if (selectedOption === correctAnswerIndex) {
      correct++;
    }
  });

  return {
    total: shuffledQuestions.length,
    correct: correct,
    percentage: Math.trunc((correct / shuffledQuestions.length) * 100),
  };
}


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function shuffleAnswers(question) {
  const shuffledAnswers = shuffleArray([...question.incorrect_answers, question.correct_answer]);
  const correctAnswerText = shuffledAnswers.find(answer => answer === question.correct_answer);

  return {
    ...question,
    incorrect_answers: shuffledAnswers.filter(answer => answer !== question.correct_answer),
    correct_answer: correctAnswerText,
  };
}




function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswer, setMarkedAnswer] = useState(new Array(QuestionList.length));
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(QuestionList).map(shuffleAnswers);
    setShuffledQuestions(shuffledQuestions);
  }, []);

  const isQuestionEnd = currentQuestionIndex === shuffledQuestions.length;

  return (
    <>
      <div className="quiz-screen">
        <NavBar />
        {isQuestionEnd ? (
          <QuizResult result={calculateResult(markedAnswer, shuffledQuestions)} shuffledQuestions={shuffledQuestions} />
        ) : (
          <Question
            question={shuffledQuestions[currentQuestionIndex]}
            totalQuestions={shuffledQuestions.length}
            currentQuestion={currentQuestionIndex + 1}
            setAnswer={(index) => {
              setMarkedAnswer((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          />
        )}
      </div>
    </>
  );
}


export default QuizScreen;
import { useState, useEffect } from "react";
import QuestionList from "../data/exam-questions.json";
import QuizResult from "../components/QuizResult";
import QuestionExam from "../components/QuestionExam";
import NavBar from "../components/NavBar";

function calculateResult(markedAnswers, shuffledQuestions) {
  let correct = 0;
  markedAnswers.forEach((selectedOption, index) => {
    const correctAnswerIndex = shuffledQuestions[index]?.incorrect_answers?.length;

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
  const shuffledAnswers = shuffleArray([...question?.incorrect_answers, question?.correct_answer]);
  const correctAnswerText = shuffledAnswers.find(answer => answer === question?.correct_answer);

  return {
    ...question,
    incorrect_answers: shuffledAnswers.filter(answer => answer !== question?.correct_answer),
    correct_answer: correctAnswerText,
  };
}

function ExamScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList?.length || 0).fill(null));
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);

  useEffect(() => {
    if (Array.isArray(QuestionList) && QuestionList.length > 0) {
      const shuffledQuestions = shuffleArray(QuestionList).map(shuffleAnswers);
      setShuffledQuestions(shuffledQuestions);
    }
  }, []);

  const isQuestionEnd = currentQuestionIndex === shuffledQuestions.length || quizEnded;

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <>
      <div className="quiz-screen">
        <NavBar />
        {isQuestionEnd ? (
          <QuizResult result={calculateResult(markedAnswers, shuffledQuestions)} shuffledQuestions={shuffledQuestions} />
        ) : (
          <QuestionExam
            question={shuffledQuestions[currentQuestionIndex]}
            totalQuestions={shuffledQuestions.length}
            currentQuestion={currentQuestionIndex + 1}
            selectedOption={markedAnswers[currentQuestionIndex]}
            setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
            onPrevClick={handlePrevClick}
          />
        )}
      </div>
    </>
  );
}

export default ExamScreen;
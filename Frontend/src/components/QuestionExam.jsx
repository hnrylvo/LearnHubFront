import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

function QuestionExam({ question, totalQuestions, currentQuestion, selectedOption, setAnswer, onPrevClick }) {
  const [timeLeft, setTimeLeft] = useState(1 * 60); // Inicializado en 10 minutos
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
  }

  useEffect(() => {
    if (question) {
      progressBar.current.classList.remove("active");
      setTimeout(() => {
        progressBar.current.classList.add("active");
      }, 0);

      timer.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            gotoNextQuestion();
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(timer.current);
      };
    }
  }, [question, setAnswer]);

  useEffect(() => {
    if (timeLeft === 0) {
      gotoNextQuestion();
    }
  }, [timeLeft]);

  const handleOptionClick = (index) => {
    setAnswer(index);
  };

  const handleNextClick = () => {
    clearInterval(timer.current);
    gotoNextQuestion();
  };

  return (
    <>
      <div className="mt-20">
        <div className="progress-bar" ref={progressBar}></div>
        <div className="text-center text-xl mb-3">
          <b> {currentQuestion} </b> of <b> {totalQuestions} </b>
        </div>
        <div className="time-left">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        <div className="main">
          <div className="flex title bg-[#38598B] text-white h-64 w-screen px-5 py-8 justify-center items-center">
            <p className="text-4xl font-semibold">{question?.question}</p>
          </div>
          <div className="mt-9 text-2xl flex flex-wrap place-content-center">
            {question?.incorrect_answers.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  selectedOption === index ? "selected" : ""
                } ${
                  selectedOption === index
                    ? "bg-color-texto text-white"
                    : "bg-[#A2A8D3]"
                } mx-5 h-auto w-44 rounded-xl flex items-center justify-center text-sm text-center p-2 font-medium cursor-pointer `}
                onClick={() => handleOptionClick(index)}
              >
                {option}
              </div>
            ))}
            <div
              className={`option ${
                selectedOption === question?.incorrect_answers.length
                  ? "selected"
                  : ""
              } ${
                selectedOption === question?.incorrect_answers.length
                  ? "bg-color-texto text-white"
                  : "bg-[#A2A8D3]"
              } ml-5 h-auto w-44 rounded-xl flex items-center text-sm text-center p-2 font-medium cursor-pointer`}
              onClick={() => handleOptionClick(question?.incorrect_answers.length)}
            >
              {question?.correct_answer}
            </div>
          </div>
        </div>
        <div className="absolute left-28 mt-8 bg-color-texto w-40 h-14 rounded-lg text-color-fondo font-semibold flex items-center justify-center">
          <button onClick={onPrevClick}>Prev</button>
        </div>
        <div className="absolute right-28 mt-8 bg-color-texto w-40 h-14 rounded-lg text-color-fondo font-semibold flex items-center justify-center">
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </>
  );
}

export default QuestionExam;
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);

    timer.current = setTimeout(gotoNextQuestion, 30 * 1000); // 30 seconds
    return () => clearTimeout(timer.current);
  }, [question, setAnswer]);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    clearTimeout(timer.current);
    gotoNextQuestion();
  };

  return (
    <div className="mt-20 relative">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="text-center text-xl mb-3">
        <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="flex title bg-[#38598B] text-white h-64 w-screen px-5 py-8 justify-center items-center">
          <p className="text-4xl font-semibold">{question.question}</p>
        </div>
        <div className="mt-9 text-2xl flex flex-wrap place-content-center">
          {question.incorrect_answers.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedOption === index ? "selected" : "bg-[#A2A8D3]"
              } bg-color-fondo mx-5 my-3 h-20 w-44 rounded-xl flex items-center justify-center text-lg text-center p-2 font-medium cursor-pointer h-auto`}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
          <div
            className={`option ${
              selectedOption === question.incorrect_answers.length
                ? "selected"
                : "bg-[#A2A8D3]"
            } bg-color-fondo text-white ml-5 my-3 h-20 w-44 rounded-xl flex items-center justify-center text-lg text-center p-2 font-medium cursor-pointer h-auto`}
            onClick={() =>
              handleOptionClick(question.incorrect_answers.length)
            }
          >
            {question.correct_answer}
          </div>
        </div>
      </div>
      <div className="absolute right-28 mt-8 bg-color-texto w-40 h-14 rounded-lg text-color-fondo font-semibold flex items-center justify-center">
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Question;

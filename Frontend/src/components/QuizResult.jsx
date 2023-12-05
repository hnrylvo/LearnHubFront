import React from "react";
import { Link } from "react-router-dom";

function QuizResult({ result, shuffledQuestions }) {
  return (
    <>
      <div>
        <div className="result-screen mt-16 border-black w-screen h-auto rounded-2xl overflow-auto">
          <h2 className="text-3xl text-center font-bold">Result: {result.percentage}%</h2>
          <p className="mt-4 text-xl text-center">
            Selected {result.correct} correct options out of {result.total} questions.
          </p>

          <div className="question-details mt-4 p-6 bg-white w-screen">
            <h3 className="text-xl">Question Details:</h3>
            <ul className="flex flex-col items-center justify-center">
              {shuffledQuestions.map((question, index) => (
                <li key={index} className="text-lg my-2">
                  <strong>Question {index + 1}:</strong> {question.question}
                  <br />
                  <strong>Correct Answer:</strong> {question.correct_answer}
                  <br />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/QuizPage">
              <button className="w-48 h-14 rounded-xl bg-color-texto text-white text-xl font-semibold ">
                Exit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizResult;

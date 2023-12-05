import React, { useState, useEffect } from "react";
import SideBarTutorts from "../components/SideBarTutors";

function TimeSelect({ value, onChange }) {
  const timeOptions = [10, 20, 30, 40, 50, 60];

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {timeOptions.map((time) => (
        <option key={time} value={time}>
          {`${time} min`}
        </option>
      ))}
    </select>
  );
}

function CreateQuizz() {
  const [quizData, setQuizData] = useState({
    title: "",
    instructions: "",
    timer: 10, // Inicializado con 10 minutos por defecto
    questionCount: 1,
    questions: [
      {
        text: "",
        options: {
          A: { text: "", answer: false },
          B: { text: "", answer: false },
          C: { text: "", answer: false },
          D: { text: "", answer: false },
        },
        correctAnswer: "",
      },
    ],
  });

  const handleTitleChange = (e) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleInstructionsChange = (e) => {
    setQuizData({ ...quizData, instructions: e.target.value });
  };

  const handleTimerChange = (time) => {
    setQuizData({ ...quizData, timer: parseInt(time, 10) });
  };

  const handleQuestionCountChange = (e) => {
    const questionCount = parseInt(e.target.value, 10);
    setQuizData({
      ...quizData,
      questionCount,
      questions: Array.from({ length: questionCount }, (_, index) => {
        const existingQuestion = quizData.questions[index] || {};
        return {
          text: existingQuestion.text || "",
          options: existingQuestion.options || {
            A: { text: "", answer: false },
            B: { text: "", answer: false },
            C: { text: "", answer: false },
            D: { text: "", answer: false },
          },
          correctAnswer: existingQuestion.correctAnswer || "",
        };
      }),
    });
  };

  const handleQuestionTextChange = (e, index) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].text = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleOptionTextChange = (e, index, option) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].options[option].text = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleOptionAnswerChange = (index, option) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].options = {
      ...updatedQuestions[index].options,
      [option]: {
        ...updatedQuestions[index].options[option],
        answer: !updatedQuestions[index].options[option].answer,
      },
    };
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (e, index) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].correctAnswer = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(quizData, null, 2));
    localStorage.removeItem("quizData"); 
    setQuizData({
      title: "",
      instructions: "",
      timer: "",
      questionCount: 1,
      questions: [
        {
          text: "",
          options: {
            A: { text: "", answer: false },
            B: { text: "", answer: false },
            C: { text: "", answer: false },
            D: { text: "", answer: false },
          },
          correctAnswer: "",
        },
      ],
    });
  };

  

  return (
    <div className="flex h-screen flex-shrink-0">
      <nav>
        <SideBarTutorts />
      </nav>
      <div className="flex-grow mx-10 md:mx-20 lg:mx-40 xl:mx-72">
        <form
          className="flex flex-col items-center mt-8 max-md:max-w-full max-md:mt-10"
          onSubmit={handleSubmit}
        >
         
<header className="text-slate-900 text-5xl font-bold tracking-wide  max-md:text-4xl">
CREATE NEW QUIZ
</header>

<section className="shadow-sm bg-slate-400 self-stretch mt-20 pt-9 pb-6 px-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
<div className="flex items-center mb-6">
  <header className="text-slate-900 text-4xl font-bold tracking-wide">
    Add title:
  </header>
  <div className="relative ml-4">
    <input
      type="text"
      value={quizData.title}
      onChange={handleTitleChange}
      className="text-slate-900 text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-black"
      placeholder="Enter title"
    />
    <div className="absolute bottom-0 left-0 w-full border-b border-slate-500"></div>
  </div>
</div>

<div className="flex items-start mb-6">
  <header className="text-white text-4xl font-bold tracking-wide">
    Add instructions:
  </header>
  <div className="relative ml-4">
    <input
      value={quizData.instructions}
      onChange={handleInstructionsChange}
      className="text-white text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-white"
      placeholder="Enter instructions"
      style={{ color: "white" }}
    />
    <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
  </div>
</div>

<div className="flex items-center mb-6">
  <header className="text-white text-4xl font-bold tracking-wide">
    Add timer:
  </header>
  <div className="relative ml-4">
  <div className="relative ml-4">
                <TimeSelect value={quizData.timer} onChange={handleTimerChange} />
              </div>

    <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
  </div>
</div>

<div className="flex items-center mb-6">
  <header className="text-white text-4xl font-bold tracking-wide">
    Número de preguntas:
  </header>
  <div className="relative ml-4">
    <input
      type="number"
      value={quizData.questionCount}
      onChange={handleQuestionCountChange}
      min={0}
      max={40}
      className="text-white text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-white"
      placeholder="5"
    />

    <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
  </div>
</div>
</section>

{quizData.questions.map((question, index) => (
<section
  key={index}
  className="hadow-sm bg-slate-400 self-stretch mt-20 pt-9 pb-6 px-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5"
>
  <div className="flex items-center mb-6">
    <header className="text-slate-900 text-4xl font-bold tracking-wide">
      Pregunta {index + 1}:
    </header>
    <div className="relative ml-4">
      <input
        type="text"
        value={question.text}
        onChange={(e) => handleQuestionTextChange(e, index)}
        className="text-slate-900 text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-black"
        placeholder={`Agrega la pregunta ${index + 1}`}
      />
      <div className="absolute bottom-0 left-0 w-full border-b border-slate-500"></div>
    </div>
  </div>

  <div className="self-stretch flex items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-5">
    {question.options && Object.keys(question.options).map((option)=> (
      <div
        key={option}
        className="flex items-center text-slate-900 text-2xl font-bold"
      >
        {option}:{" "}
        <input
          type="text"
          value={question.options[option].text}
          onChange={(e) => handleOptionTextChange(e, index, option)}
          className="mr-2"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={question.options[option].answer}
            onChange={() => handleOptionAnswerChange(index, option)}
            className="mr-1"
          />
        </label>
      </div>
    ))}
  </div>
</section>
))}

<button
className="text-slate-200 text-justify text-3xl font-bold tracking-wide bg-slate-900 w-[330px] max-w-full justify-center items-center mt-8 px-5 py-7 rounded-xl max-md:mt-5 flex-col"
type="submit"
>
Crear
</button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuizz;

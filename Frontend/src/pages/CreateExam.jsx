import React, { useState, useEffect } from "react";
import SideBarTutorts from "../components/SideBarTutors";
function CreateExamn() {
  const [quizData, setQuizData] = useState(() => {
    
    const savedQuizData = JSON.parse(localStorage.getItem("quizData")) || {
      title: "",
      instructions: "",
      timer: "",
      questionCount: 1,
      questions: [
        {
          text: "",
          answer: "",
        },
      ],
    };
    return savedQuizData;
  });
  useEffect(() => {
    const savedQuizData = JSON.parse(localStorage.getItem("quizData"));
    if (savedQuizData) {
      setQuizData(savedQuizData);
    }
  }, []);

  // Guardar datos al cambiar el estado de quizData
  useEffect(() => {
    localStorage.setItem("quizData", JSON.stringify(quizData));
  }, [quizData]);


  const handleTitleChange = (e) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleInstructionsChange = (e) => {
    setQuizData({ ...quizData, instructions: e.target.value });
  };

  const handleTimerChange = (e) => {
    setQuizData({ ...quizData, timer: e.target.value });
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
          answer: existingQuestion.answer || "",
        };
      }),
    });
  };

  const handleQuestionTextChange = (e, index) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].text = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleAnswerTextChange = (e, index) => {
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index].answer = e.target.value;
    setQuizData({ ...quizData, questions: updatedQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(quizData, null, 2));
 
    setQuizData({
      title: "",
      instructions: "",
      timer: "00:00",
      questionCount: 1,
      questions: [{ text: "", answer: "" }],
    });
  };
  return (
    <div className="flex h-screen flex-shrink-0">
      <nav>
        <SideBarTutorts />
      </nav>
      <div className="flex-grow h-screen mx-10 md:mx-20 lg:mx-40 xl:mx-72 h-full w-full">
        <form
          className="flex flex-col items-center mt-8 max-md:max-w-full max-md:mt-10"
          onSubmit={handleSubmit}
        >
          <header className="text-slate-900 text-5xl font-bold tracking-wide  max-md:text-4xl">
            CREATE NEW EXAM
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
                <input
                  type="text"
                  value={quizData.timer}
                  onChange={handleTimerChange}
                  className="text-white text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-white"
                  placeholder="00:00"
                />
                <div className="absolute bottom-0 left-0 w-full border-b border-white"></div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <header className="text-white text-4xl font-bold tracking-wide">
                Number of questions:
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
              className="shadow-sm bg-slate-400 self-stretch mt-20 pt-9 pb-6 px-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5"
            >
              <div className="flex items-center mb-6">
                <header className="text-slate-900 text-4xl font-bold tracking-wide">
                  Question {index + 1}:
                </header>
                <div className="relative ml-4">
                  <input
                    type="text"
                    value={question.text}
                    onChange={(e) => handleQuestionTextChange(e, index)}
                    className="text-slate-900 text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-black"
                    placeholder={`Add question ${index + 1}`}
                  />
                  <div className="absolute bottom-0 left-0 w-full border-b border-slate-500"></div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <header className="text-slate-900 text-4xl font-bold tracking-wide">
                  Answer {index + 1}:
                </header>
                <div className="relative ml-4">
                  <input
                    type="text"
                    value={question.answer}
                    onChange={(e) => handleAnswerTextChange(e, index)}
                    className="text-slate-900 text-4xl font-bold tracking-wide outline-none border-none bg-transparent placeholder-black"
                    placeholder={`Add answer for question ${index + 1}`}
                  />
                  <div className="absolute bottom-0 left-0 w-full border-b border-slate-500"></div>
                </div>
              </div>
            </section>
          ))}

          <button
            className="text-slate-200 text-justify text-3xl font-bold tracking-wide bg-slate-900 w-[330px] max-w-full justify-center items-center mt-8 px-5 py-7 rounded-xl max-md:mt-5 flex-col"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateExamn;

import React from "react";
import Login from "./pages/Login";
import JoinScreen from "./pages/JoinScreen";
import JoinScreenExam from "./pages/JoinScreenExam";
import JoinScreenTutors from "./pages/JoinScreenTutor";
import QuizPage from "./pages/QuizPage";
import ExamPage from "./pages/ExamPage";
import CreateExam from "./pages/CreateExam";
import CreateQuizz from "./pages/CreateQuizz";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EvaluateTutor from "./pages/EvaluateTutor";
import QuizScreen from "./pages/QuizScreen";
import ExamScreen from "./pages/ExamScreen";

function App() {
  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/JoinScreenTutor" element={<JoinScreenTutors />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/create-quiz" element={<CreateQuizz />} />
          <Route path="/QuizPage" element={<QuizPage />} />
          <Route path="/ExamPage" element={<ExamPage />} />
          <Route path="/Quiz" element={<QuizScreen />} />
          <Route path="/Exam" element={<ExamScreen />} />
          <Route path="/JoinScreen" element={<JoinScreen />} />
          <Route path="/JoinScreenExam" element={<JoinScreenExam />} />
          <Route path="/EvaluateTutor" element={<EvaluateTutor />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
import CourseIcon from "../assets/icons-sidebar/course-icon.svg"
import ExamIcon from "../assets/icons-sidebar/exam-icon.svg"
import LikedIcon from "../assets/icons-sidebar/liked-courses-icon.svg"
import QuizIcon from "../assets/icons-sidebar/quiz-icon.svg"
import RateCourseIcon from "../assets/icons-sidebar/ratecourse-icon.svg"
import RateTutorIcon from "../assets/icons-sidebar/ratetutor-icon.svg"
import AboutUsIcon from "../assets/icons-sidebar/aboutus-icon.svg"
import CreateExam from "../pages/CreateExam"
import React, { useState, useEffect } from 'react';
import axios from "axios"

export const SideBarTutorts = () => {

  const [userName, setUserName] = useState("Usuario"); 
  const identifier = localStorage.getItem("identifier");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (identifier) {

          const response = await axios.get("tu_endpoint_de_usuario");
          const userData = response.data;

          setUserName(userData.name);
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchUserData();
  }, [identifier]); 
  return (
    <div className=" bg-white fixed flex flex-col top-0 left-0 w-64 h-[calc(100vh-2rem)] rounded-3xl shadow border-r border-gray-200 m-4 flex-grow ">
      <div className="flex items-center justify-center h-14 border-b">
        <div>{userName}</div>
      </div>

      <ul className="flex flex-col py-8 space-y-12 flex-grow">
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={CourseIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Courses</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={LikedIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Liked</span>
          </a>
        </li>
        <li>
          <a
            href="/CreateExam"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={ExamIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Create Exams</span>
          </a>
        </li>
        <li>
          <a
            href="create-quiz"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={QuizIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate"> Create Quizzes</span>
          </a>
        </li>
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">
              Information
            </div>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={RateTutorIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Rate Tutors
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img
                src={RateCourseIcon}
                alt=""
              />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Rate Curses
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src={AboutUsIcon} alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              About us
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <img src="src/assets/imagenes/log-out-solid-24.png" alt="" />
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideBarTutorts;
import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRatingChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex space-x-3">
      {stars.map((star) => (
        <FaStar
          key={star}
          className="star-icon"
          color={rating >= star ? "#ffd700" : "#e4e5e9"}
          size={25}
          onClick={() => onRatingChange(star)}
        />
      ))}
    </div>
  );
};

const EvaluateTutor = () => {
  const tutors = ["Tutor 1", "Tutor 2", "Tutor 3"]; 

  const [selectedTutor, setSelectedTutor] = useState("");
  const [rating1, setRating1] = useState(null);
  const [rating2, setRating2] = useState(null);
  const [rating3, setRating3] = useState(null);

  const handleRatingChange1 = (newRating) => {
    setRating1(newRating);
  };

  const handleRatingChange2 = (newRating) => {
    setRating2(newRating);
  };

  const handleRatingChange3 = (newRating) => {
    setRating3(newRating);
  };

  const handleTutorChange = (event) => {
    setSelectedTutor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedTutor("");
    setRating1(null);
    setRating2(null);
    setRating3(null);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center ml-24">
      <nav>
        <Sidebar />
      </nav>

      <h2 className="text-slate-600 text-5xl font-bold tracking-wide self-center whitespace-nowrap">
        Give us
      </h2>

      <h1 className="text-slate-900 text-6xl font-bold tracking-wide mt-7 self-center whitespace-nowrap">
        YOUR OPINION
      </h1>

      <h2 className="text-slate-600 text-5xl font-bold tracking-wide mt-7">
        Rate Tutor
      </h2>
      <label className="text-slate-600 text-2xl font-bold mt-16">
        Selecciona un tutor:
        <select
          className="ml-3 p-2 border rounded"
          value={selectedTutor}
          onChange={handleTutorChange}
        >
          <option value="" disabled>
            Elige un tutor
          </option>
          {tutors.map((tutor, index) => (
            <option key={index} value={tutor}>
              {tutor}
            </option>
          ))}
        </select>
      </label>

      <div className="w-[837px] h-auto px-[182px] pt-[30px] pb-[31px] rounded-[13px] box-border bg-[rgba(162,168,211,1)] mt-9">
        <form className="flex flex-col space-y-4 ">
          <label className="flex-1 ">
            <p className="text-xl">¿Cómo calificarías la claridad de las explicaciones del tutor?</p>
            <StarRating rating={rating1} onRatingChange={handleRatingChange1} />
          </label>

          <label className="flex-1">
            <p className="text-xl">¿Cómo evaluarías la disponibilidad y receptividad del tutor para abordar tus preguntas y preocupaciones?</p>
            <StarRating rating={rating2} onRatingChange={handleRatingChange2} />
          </label>
          
          <label className="flex-1">
            <p className="text-xl">En qué medida sientes que el tutor se adapta a tus necesidades de aprendizaje</p>
            <StarRating rating={rating3} onRatingChange={handleRatingChange3} />
          </label>
        </form>
      </div>

      <button
        className="text-slate-200 text-justify text-4xl font-bold tracking-wide bg-slate-900 w-[330px] max-w-full justify-center items-center mt-8 px-5 py-7 rounded-xl max-md:mt-5 flex-col mt-9"
        type="submit"
        onClick={handleSubmit}
      >
        Submit 
      </button>
    </div>
  );
};

export default EvaluateTutor;

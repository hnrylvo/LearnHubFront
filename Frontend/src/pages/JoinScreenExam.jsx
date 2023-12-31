import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function JoinScreenExam({ start }) {
  return (
    <div className="flex h-screen ml-9">
      <nav>
        {" "}
        <SideBar />{" "}
      </nav>
      <div className="mx-72">
        <header>
          <NavBar />
        </header>
        <section className="mt-20">
          <div className="indications-section flex">
            <h4 className="text-color-alterno text-2xl font-bold">
              Indications
            </h4>
            <div className="w-11/12 border-2 border-color-borde rounded-2xl mt-20 p-4 items-center">
              <p className="text-justify text-lg text-color-texto my-2">
                Este examen te desafiará con preguntas avanzadas sobre conceptos
                fundamentales en el mundo del desarrollo web. Tendrás un total
                de 30 minutos para responder las 10 preguntas. La libertad de
                tiempo te permite profundizar en cada pregunta, pero recuerda
                administrar tu tiempo sabiamente. ¡Buena suerte! Instrucciones
                Generales: Duración del Examen: El examen tiene una duración de
                30 minutos en total. Tómate el tiempo necesario para comprender
                y responder cada pregunta. Navegación Libre: Puedes revisar y
                cambiar tus respuestas en cualquier momento durante los 30
                minutos. Aprovecha esta flexibilidad para asegurarte de que
                estás satisfecho con tus elecciones. Respuestas Seleccionadas:
                Selecciona la respuesta que consideres correcta para cada
                pregunta. No hay penalización por respuestas incorrectas, así
                que ¡intenta responder todas las preguntas! Conceptos Avanzados:
                Las preguntas abordan temas avanzados en desarrollo web. Piensa
                detenidamente y aplica tus conocimientos adquiridos.
                Finalización del Examen: Una vez que hayas completado todas las
                preguntas o el tiempo se agote, recibirás tu puntuación.
              </p>
            </div>
          </div>
        </section>

        <section className="ml-40 flex flex-col items-center">
          <div className="mt-9 h-20 w-11/12 bg-color-borde text-color-texto text-xl font-semibold rounded-xl p-5 flex items-center justify-between">
            <p className="quiz-title">Evaluacion 01</p>
            <div className="bg-white rounded-md p-3">
              <p className="number-of-questions">Questions: 10</p>
            </div>
          </div>
          <p className="time-info mt-2 w-44 text-center text-sm">
            You will have 30 minutes to answer the exam
          </p>
        </section>

        <div className="flex items-center justify-center ml-40">
          <Link to="/Exam">
            <button
              onClick={start}
              className="w-48 h-12 rounded-xl bg-color-texto text-color-fondo text-l font-bold mt-8 cursor-pointer"
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinScreenExam;

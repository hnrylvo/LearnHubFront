import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function JoinScreen({ start }) {
  return (
    <div className="flex h-screen ml-9">
      <nav> <SideBar/> </nav>
      <div className="mx-72">
        <header>
          <NavBar />
        </header> 
        <section className="mt-20">
          <div className="indications-section flex">
            <h4 className="text-color-alterno text-2xl font-bold">Indications</h4>
            <div className="w-11/12 border-2 border-color-borde rounded-2xl mt-20 p-4 items-center">
              <p className="text-justify text-lg text-color-texto my-2">
Este quiz consta de 10 preguntas cuidadosamente seleccionadas para evaluar tu comprensión de los conceptos esenciales en este fascinante campo. Antes de comenzar, aquí tienes algunas instrucciones clave:

Duración del Quiz:

Cada pregunta tiene asignados 30 segundos. Este tiempo se agotará rápidamente, así que mantén un ritmo constante y enfocado.
Selección de Respuestas:

Cada pregunta tiene cuatro opciones de respuesta. Lee cada opción detenidamente antes de tomar una decisión. Selecciona la opción que consideres correcta.
Puntuación y Resultados:

Tu puntuación se calculará al final del quiz en base al número de respuestas correctas. ¡Aspira a obtener la puntuación máxima!
No hay Preguntas Trampa:

Todas las preguntas están diseñadas para evaluar tu conocimiento genuino sobre desarrollo web. No hay trampas ni respuestas "casi correctas". Confía en tu conocimiento.
Compartir tus Resultados:


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
          <p className="time-info mt-2 w-44 text-center text-sm">You will have 30s per question</p>
        </section>

        <div className="flex items-center justify-center ml-40">
        <Link to="/Quiz">
          <button onClick={start} className="w-48 h-12 rounded-xl bg-color-texto text-color-fondo text-l font-bold mt-8">
            Start
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinScreen;
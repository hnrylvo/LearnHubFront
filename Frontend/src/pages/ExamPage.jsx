import SideBar from "../components/SideBar";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function QuizPage() {
  return (
    <>
      <nav>
        <SideBar />
      </nav>
      <div className="">
        <h2 className="font-bold text-4xl text-color-texto text-center my-8 ml-20">
          EXAMS TO DO
        </h2>
        <div className="flex place-content-center ml-9 cursor-pointer mt-16">
          <Link
            to="/JoinScreenExam"
            className="w-full h-full flex place-content-center"
          >
            <Card />
          </Link>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
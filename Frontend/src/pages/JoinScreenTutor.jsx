import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import SideBarTutorts from "../components/SideBarTutors";

function JoinScreenTutor({ start }) {
  return (
    <div className="flex h-screen ml-9">
      <nav> <SideBarTutorts/> </nav>
      
    </div>
  );
}

export default JoinScreenTutor;
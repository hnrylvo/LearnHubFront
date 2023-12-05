import LearnHubLogo from "../assets/learnhub-logo/learnhub-logo.svg";

function NavBar() {
  return (
    <header className="flex mx-9 font-roboto text-color-texto">
      <div className="space-x-6 mt-6 flex ">
      <p className="text-2xl">courses {">"} matematicas 01</p>
      <h2 className=" text-5xl text-center mt-24"> {">"} Quiz tittle</h2>
      </div>
      <div className="mt-6 absolute right-6">
      <img src={LearnHubLogo} alt="LearnHub Logo" />
      </div>
    </header> 
  );
}

export default NavBar;

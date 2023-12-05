function Card() {
    return (
      <>
        <div className="bg-[#A2A8D3] rounded-xl w-7/12 h-48 p-6 ml-16 flex justify-between">
          <div className="information">
            <h3 className="font-semibold text-2xl mb-6">Evaluation 01</h3>
            <div className="subject-container mb-10">
              <p className="text-color-fondo text-xl">Subject: matematicas 01</p>
            </div>
            <div className="author">
              <p className="text-color-fondo">created by: tutor 01</p>
            </div>
          </div>
          <div className="bg-white rounded-lg w-56 h-32 p-6 flex flex-col items-center">
            <p className="font-semibold text-lg mb-7">Questions</p>
            <p className="font-bold text-xl">15/15</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
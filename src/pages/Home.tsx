import BackImage from "../assets/evelyn-semenyuk-6dWaLSO2dzY-unsplash.jpg";

function Home() {
  return (
    <div>
      {/* Header */}
      <div className="h-[15vh] flex flex-row">
        <div className="flex flex-row bg-red-500 flex-1 justify-center items-center">
          <p>Ürünler</p>
          <p>İletişim</p>
          <p>Hakkımızda</p>
        </div>
        <div className="flex flex-row bg-red-500 flex-1 justify-center items-center">
          ChicHarmony
        </div>
        <div className="flex flex-row bg-red-500 flex-1 justify-center items-center">
          <p>Ara</p>
        </div>
      </div>
      <div>
        <img src={BackImage} className="w-screen absolute" alt="" />
      </div>
    </div>
  );
}

export default Home;

import BackImage from "../assets/evelyn-semenyuk-6dWaLSO2dzY-unsplash.jpg";
import LogoImage from "../assets/c.png";

function Home() {
  return (
    <div>
      <div>
        {/* Background image */}
        <img
          src={BackImage}
          className="w-screen absolute h-screen object-cover"
          alt=""
        />
        {/* Logo and coming soon text */}
        <div className="absolute top-[35vh] left-[15vw] bg-white h-[35vh] justify-center items-center">
          <img
            src={LogoImage}
            alt="CHIC HARMONY"
            className="h-[25vh] w-[70vw] object-cover"
          />
          <p className="w-full text-center text-black font-extralight text-[2rem]">
            Çok Yakında...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

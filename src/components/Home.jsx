import charte from "../assets/charte.jpg";
import Logo from "../assets/Logo.png";

function Home() {
  return (
    <main>
      <div className="homeContent1">
        <div className="text1">
          <h1>Promo Développeur WEB/Mobile Wild Valence</h1>
          <p className="presentation">Période: du 27/02/2023 au 19/12/2023</p>
          <p className="presentation">
            19Formation, <br />
            34 Rue Henri Rey, <br />
            26000 Valence
          </p>
        </div>
      </div>
      <div>
        <div className="homeContent2">
          <h1>Charte de groupe</h1>
          <img className="image2" src={charte} />
        </div>
      </div>
      <div className="bear">
        <img className="logoimg" src={Logo} />
      </div>
    </main>
  );
}

export default Home;

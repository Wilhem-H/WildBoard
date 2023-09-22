import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/Logo.png";
import ChartePicture from "../assets/fondImgCharte.jpg";
import LogoPicture from "../assets/DesignTest.png";

import "./Home.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main>
      <section className="homeText">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="rotating-svg"
        >
          <path
            fill="#BE0000"
            d="M40.6,-38C56.1,-25.1,74.5,-12.6,73.6,-0.9C72.7,10.8,52.5,21.6,37.1,36.3C21.6,51.1,10.8,69.9,-5.5,75.4C-21.8,80.9,-43.7,73.2,-54.7,58.4C-65.7,43.7,-65.8,21.8,-63.7,2.2C-61.5,-17.5,-57,-35,-46,-47.9C-35,-60.8,-17.5,-69.1,-2.5,-66.6C12.6,-64.2,25.1,-50.9,40.6,-38Z"
            transform="translate(100 100)"
          />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="6"
            fill="#FFFFFF"
            fontFamily="sans-serif"
          >
            Promo Développeur WEB/Mobile Wild Valence
          </text>
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="5"
            fill="#FFFFFF"
          >
            <tspan>Du </tspan>
            <tspan fontWeight="bold">27/02/2023</tspan> <tspan>au </tspan>
            <tspan fontWeight="bold">19/12/2023</tspan>
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="5"
            fill="#FFFFFF"
          >
            19Formation
          </text>
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="5"
            fill="#FFFFFF"
          >
            34 Rue Henri Rey
          </text>
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="5"
            fill="#FFFFFF"
          >
            26000 Valence
          </text>
        </svg>
      </section>
      <section className="charte" data-aos="zoom-in">
        {/* <div className="chartePicture"></div> */}
        <img className="chartePicture" src={ChartePicture} />
        <h1 className="charteH1" data-aos="fade-up">
          Charte de groupe
        </h1>
      </section>
      <hr className="trait-horizontal" />
      <section className="charte_text">
        <p className="charteElement" data-aos="fade-right">
          I. A la pause de Laurence tu t’adapteras.
        </p>
        <p className="charteElement" data-aos="fade-right">
          II. Le matériel de chacun tu respecteras.
        </p>
        <p className="charteElement" data-aos="fade-right">
          III. Le JavaScript tu vénéreras.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          IV. La communauté, le vendredi, tu écouteras.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          V. Sur l’espace de travail de ton voisin, tu ne déborderas pas.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          VI. Le matériel des autres, tu ne casseras pas.
        </p>
        <p className="charteElement" data-aos="fade-right">
          VII. La pression pour les projets, tu ne te mettras pas.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          VIII. Pour le Kahoot, tout tu donneras.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          IX. Motivé, le lundi, tu viendras.{" "}
        </p>
        <p className="charteElement" data-aos="fade-right">
          X. Nils remplace Laurence pour la règle numéro I.
        </p>
      </section>

      <hr className="trait-horizontal" />

      <section className="charte" data-aos="zoom-in">
        <img className="logoPicture" src={LogoPicture} />
        <h2 className="LogoH1" data-aos="fade-up">
          {" "}
          Notre Logo
        </h2>
      </section>
      <section className="homePresentation">
        <section>
          <p className="teamTextTop">
            Une équipe <strong>motivée</strong>!
          </p>
          <img
            className="logo"
            src={Logo}
            data-aos="zoom-in"
            data-aos-duration="2800"
          />
          <p className="teamTextBottom">
            Ou <strong>tryhard</strong> et <strong>bonne ambiance</strong> sont
            les maitres mots!
          </p>
        </section>
      </section>

      <section className="charte"></section>
    </main>
  );
}

export default Home;

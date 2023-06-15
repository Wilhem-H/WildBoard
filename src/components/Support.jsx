import { useState } from "react";
import "./Support.css";
import { links } from "../data.js";

function Support() {
  const categories = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "GitHub",
    "Algo",
    "UX/UI",
    "Veille techno",
    "Emploi",
    "Autre",
  ];

  const [currentCategory, setCurrentCategory] = useState("");

  const handleClick = (category) => {
    console.log(category);
    setCurrentCategory(category);
  };

  return (
    <>
      <h1 className="liensUtiles">Liens Utiles</h1>
      <h3 className="infos">
        Ici sont regroupés tous les sites partagés par les wilders de valence et
        qui peuvent nous servir tout au long de notre apprentissage:
      </h3>
      <div className="divButton">
        {categories.map((category) => {
          return (
            <button
              onClick={() => handleClick(category)}
              key={category}
              className="button"
            >
              {category}
            </button>
          );
        })}
      </div>
      <section className="cardSection">
        {currentCategory
          ? links
              .filter((link) => link.category === currentCategory)
              .map((link) => {
                return (
                  <div key={link.name} className="linkCard">
                    <a href={link.link} target="_blank">
                      {link.name}
                    </a>
                    <p>{link.desc}</p>
                  </div>
                );
              })
          : links.map((link) => {
              return (
                <div className="linkCard" key={link.name}>
                  <div className="card">
                    <div>
                      <a href={link.link} target="_blank">
                        {link.name}
                      </a>
                    </div>
                    <div>
                      <p>{link.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </section>
    </>
  );
}

export default Support;

import { useState } from "react";
import "./Support.css";
import { links } from "../data.js";

function Support() {
  const categories = [
    "Tous les liens",
    "HTML",
    "CSS",
    "JS",
    "React",
    "Algo",
    "UX/UI",
    "Veille techno",
    "Emploi",
    "Autre",
  ];

  const [currentCategory, setCurrentCategory] = useState("");
  const [banner, setBanner] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
  );

  const handleClick = (category) => {
    category === "Tous les liens"
      ? setCurrentCategory("")
      : setCurrentCategory(category);
  };

  return (
    <>
      <h1 className="support_title">Liens Utiles</h1>
      <h3 className="support_desc">
        Ici sont regroupés tous les sites partagés par les wilders de valence et
        qui peuvent nous servir tout au long de notre apprentissage:
      </h3>
      <div className="support_selector">
        {categories.map((category) => (
          <button
            onClick={() => handleClick(category)}
            key={category}
            className="support_button"
          >
            {category}
          </button>
        ))}
      </div>
      <section className="support_cardSection">
        {currentCategory
          ? links
              .filter((link) => link.category === currentCategory)
              .map((link) => (
                <div key={link.name} className="support_cardLink">
                  <div className="support_card">
                    <img
                      className="support_cardImg"
                      src={banner}
                      alt="Represents the article"
                    />
                    <div>
                      <a href={link.link} target="_blank">
                        {link.name}
                      </a>
                      <p>{link.desc}</p>
                    </div>
                  </div>
                </div>
              ))
          : links.map((link) => (
              <div className="support_cardLink" key={link.name}>
                <div className="support_card">
                  <img
                    className="support_cardImg"
                    src={banner}
                    alt="Represents the article"
                  />
                  <div>
                    <a href={link.link} target="_blank">
                      {link.name}
                    </a>
                    <p>{link.desc}</p>
                  </div>
                </div>
              </div>
            ))}
      </section>
    </>
  );
}

export default Support;

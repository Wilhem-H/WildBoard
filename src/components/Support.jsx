import { useEffect, useState } from "react";
import axios from "axios";
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
    setCurrentCategory(category);
  };

  const [banner, setBanner] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
  );
  const url = encodeURIComponent(links.link);
  const instance = axios.create({
    baseURL: "https://api.embed.rocks",
    headers: { "x-api-key": import.meta.env.VITE_OG_API_KEY },
  });
  useEffect(() => {
    const controller = new AbortController();
    instance
      .get(`/api?url=${url}`, { signal: controller.signal })
      .then((response) => response.data.images?.[0])
      .then((image) => image && setBanner(image?.url))
      .catch((err) => console.error(err));

    return () => {
      controller.abort();
    };
  }, []);

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

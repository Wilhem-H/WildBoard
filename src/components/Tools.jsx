import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Tools.css";
import { tools } from "../data.js";

function Tools() {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <>
      <h1 className="tools_title">Nos outils</h1>
      <div className="tools_content">
        {tools.map((t) => (
          <div key={t.name} className="tools_card" data-aos="zoom-in-up">
            <a href={t.link} target="_blank" className="tools_link">
              <span>
                <img src={t.img} alt={t.name} className="tools_picture" />
                {t.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Tools;

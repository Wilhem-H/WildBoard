import "./Tools.css";
import { tools } from "../data.js";

function Tools() {
  return (
    <>
      {tools.map((t) => (
        <div key={t.name} className="tools_card">
          <a href={t.link} target="_blank" className="tools_link">
            <span>
              <img src={t.img} alt={t.name} className="tools_picture" />
              {t.name}
            </span>
          </a>
        </div>
      ))}
    </>
  );
}

export default Tools;

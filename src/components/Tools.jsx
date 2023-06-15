import "./Tools.css";
import { tools } from "../data.js";

function Tools() {
  return (
    <>
      {tools.map((t) => (
        <div key={t.name} className="toolsBox">
          <img src={t.img} alt={t.name} className="toolsLogo" />
          <a href={t.link} target="_blank">
            {t.name}
          </a>
        </div>
      ))}
    </>
  );
}

export default Tools;
